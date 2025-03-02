"use client";

import React, { useCallback, useMemo, useState } from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type FormData = {
  name: string;
  phone: string;
  email: string;
  legal: string;
  description: string;
};

type SubmitStatus = {
  type: "success" | "error";
  message: string;
} | null;

type StepConfig = {
  step: number;
  label: string;
  name: keyof FormData;
  type: "text" | "email" | "tel" | "textarea" | "select";
  placeholder: string;
  options?: string[];
};

const initialFormData: FormData = {
  name: "",
  phone: "",
  email: "",
  legal: "",
  description: "",
};

const steps: StepConfig[] = [
  {
    step: 0,
    label: "Legal Type",
    name: "legal",
    type: "select",
    placeholder: "Select legal service type",
    options: [
      "Syariah Islamic",
      "Litigation and Dispute",
      "Corporate and Commercial",
      "Real Estate and Property",
      "Property and Technology",
      "Estate Planning and Probate",
      "Specialized Legal Service",
    ],
  },
  {
    step: 1,
    label: "Full Name",
    name: "name",
    type: "text",
    placeholder: "Enter your full name",
  },
  {
    step: 2,
    label: "Phone Number",
    name: "phone",
    type: "tel",
    placeholder: "Enter your phone number",
  },
  {
    step: 3,
    label: "Email",
    name: "email",
    type: "email",
    placeholder: "Enter your email",
  },
  {
    step: 4,
    label: "Description",
    name: "description",
    type: "textarea",
    placeholder: "Please describe your legal needs",
  },
];

const inputClass =
  "w-full px-4 py-2 border border-[#8F6F4C] text-[#072240] placeholder:text-[#072240] font-instrument-sans-regular text-base font-medium";
const baseButtonClass =
  "hover:cursor-pointer font-instrument-sans-regular text-base font-semibold px-6 py-2 relative overflow-hidden transition-all duration-300 after:absolute after:bottom-0 after:left-0 after:h-full after:w-0 after:transition-all after:duration-300 hover:after:w-full";
const primaryButtonClass = `${baseButtonClass} text-white bg-gradient-to-br from-[#8F6F4C] to-[#CC9E52] hover:text-white after:bg-[#072240]`;
const secondaryButtonClass = `${baseButtonClass} border border-[#8F6F4C] text-[#8F6F4C] bg-white hover:text-white after:bg-[#072240]`;

const StepperForm = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>(null);

  const isStepComplete = useMemo(() => {
    const currentFields = steps[currentStep].name;
    return formData[currentFields].trim() !== "";
  }, [currentStep, formData]);

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      setFormData((prev) => ({ ...prev, [name]: value }));
    },
    []
  );

  const handleSelectChange = useCallback((value: string) => {
    setFormData((prev) => ({ ...prev, legal: value }));
  }, []);

  const navigateStep = useCallback((direction: "next" | "prev") => {
    setCurrentStep((prev) => (direction === "next" ? prev + 1 : prev - 1));
  }, []);

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();
      setIsSubmitting(true);
      setSubmitStatus(null);

      try {
        const response = await fetch("https://formspree.io/f/movaoevz", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(formData),
        });

        const data = await response.json();

        if (response.ok) {
          setSubmitStatus({
            type: "success",
            message: "Form submitted successfully!",
          });
          setFormData(initialFormData);
          setCurrentStep(0);
        } else {
          setSubmitStatus({
            type: "error",
            message: data.error || "Submission failed. Please try again.",
          });
        }
      } catch (error) {
        console.log(error);
        setSubmitStatus({
          type: "error",
          message: "Network error. Please check your connection.",
        });
      } finally {
        setIsSubmitting(false);
      }
    },
    [formData]
  );

  const currentStepConfig = steps[currentStep];

  return (
    <div className="w-full">
      <Card className="w-full rounded-none bg-transparent border-0 shadow-none">
        <CardContent className="p-0">
          {submitStatus && (
            <div
              className={`p-3 mb-4 rounded ${
                submitStatus.type === "success"
                  ? "bg-green-100 text-green-800"
                  : "bg-red-100 text-red-800"
              }`}
            >
              {submitStatus.message}
            </div>
          )}

          <form id="stepperForm" onSubmit={handleSubmit}>
            <div className="space-y-2">
              <Label
                htmlFor={currentStepConfig.name}
                className="font-tinos-regular font-normal text-2xl text-white"
              >
                {currentStepConfig.label}{" "}
                <span className="text-red-500">*</span>
              </Label>

              {currentStepConfig.type === "select" ? (
                <Select
                  value={formData.legal}
                  onValueChange={handleSelectChange}
                >
                  <SelectTrigger
                    id="legal"
                    className={`${inputClass} bg-white rounded-none`}
                  >
                    <SelectValue placeholder={currentStepConfig.placeholder} />
                  </SelectTrigger>
                  <SelectContent className="border-[#8F6F4C] bg-white rounded-none ">
                    {currentStepConfig.options?.map((option) => (
                      <SelectItem
                        key={option}
                        value={option}
                        className="font-instrument-sans-regular text-base font-medium text-[#072240] hover:cursor-pointer hover:underline"
                      >
                        {option}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              ) : currentStepConfig.type === "textarea" ? (
                <textarea
                  className={`${inputClass} resize-none`}
                  id={currentStepConfig.name}
                  name={currentStepConfig.name}
                  value={formData[currentStepConfig.name]}
                  onChange={handleInputChange}
                  placeholder={currentStepConfig.placeholder}
                  rows={4}
                  required
                />
              ) : (
                <input
                  className={inputClass}
                  type={currentStepConfig.type}
                  id={currentStepConfig.name}
                  name={currentStepConfig.name}
                  value={formData[currentStepConfig.name]}
                  onChange={handleInputChange}
                  placeholder={currentStepConfig.placeholder}
                  required
                />
              )}
            </div>
          </form>
        </CardContent>

        <CardFooter className="px-0 pt-4 pb-0 flex gap-4">
          <button
            className={secondaryButtonClass}
            onClick={() => navigateStep("prev")}
            disabled={currentStep === 0 || isSubmitting}
          >
            <span className="relative z-10">Back</span>
          </button>

          {currentStep === steps.length - 1 ? (
            <button
              type="submit"
              className={primaryButtonClass}
              form="stepperForm"
              disabled={!isStepComplete || isSubmitting}
            >
              <span className="relative z-10">
                {isSubmitting ? "Processing..." : "Submit"}
              </span>
            </button>
          ) : (
            <button
              className={primaryButtonClass}
              onClick={() => navigateStep("next")}
              disabled={!isStepComplete || isSubmitting}
            >
              <span className="relative z-10">Next</span>
            </button>
          )}
        </CardFooter>
      </Card>
    </div>
  );
};

export default StepperForm;
