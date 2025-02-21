"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Check, Send } from "lucide-react"
import emailjs from "@emailjs/browser"
import { toast } from "@/hooks/use-toast"
import { Toaster } from "./ui/toaster"
import { EMAILJS_PUBLIC_KEY, EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID } from "@/lib/email"
import { Input } from "./ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select"
import { Button } from "./ui/button"

const transitionProps = {
    type: "spring",
    stiffness: 500,
    damping: 30,
    mass: 0.5,
}

type QuestionType = {
    id: string
    question: string
    type: "text" | "email" | "tel" | "select" | "multiselect" | "number" | "textarea"
    options?: string[]
}

const questions: QuestionType[] = [
    { id: "fullName", question: "Full Name", type: "text" },
    { id: "email", question: "Email Address", type: "email" },
    { id: "phone", question: "Phone Number", type: "tel" },
    {
        id: "communicationMethod",
        question: "Preferred Method of Communication",
        type: "select",
        options: ["Phone", "Email", "WhatsApp"],
    },
    {
        id: "spaceType",
        question: "What type of space are you looking to design?",
        type: "multiselect",
        options: [
            "Residential (Bungalow, Villa, etc.)",
            "Apartment/Flat",
            "Penthouse",
            "Office/Commercial Space",
            "Restaurant/Café",
            "Retail Space",
            "Other",
        ],
    },
    { id: "totalArea", question: "What is the total area of the space to be designed? (in sqft/sqm)", type: "number" },
    { id: "roomsToDesign", question: "How many rooms/sections do you need to design?", type: "textarea" },
    {
        id: "existingFeatures",
        question: "Are there any existing features or design elements that need to be incorporated into the design?",
        type: "textarea",
    },
    {
        id: "designStyle",
        question: "What type of interior design style are you looking for?",
        type: "multiselect",
        options: [
            "Modern",
            "Contemporary",
            "Minimalist",
            "Classic/Traditional",
            "Industrial",
            "Rustic",
            "Scandinavian",
            "Eclectic",
            "Mediterranean",
            "Bohemian",
            "Other",
        ],
    },
    { id: "colorPreferences", question: "Do you have any color preferences for the design?", type: "textarea" },
    { id: "budget", question: "What is your budget for this project?", type: "textarea" },
    {
        id: "timeline",
        question: "What is your preferred timeline for project completion?",
        type: "select",
        options: ["1-3 months", "3-6 months", "6+ months", "Flexible"],
    },
]

// export default function InteriorDesignQuestionnaire() {
//     const [answers, setAnswers] = useState<Record<string, string | string[]>>({})
//     const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)

//     const handleInputChange = (questionId: string, value: string | string[]) => {
//         setAnswers((prev) => ({ ...prev, [questionId]: value }))
//     }

//     const handleMultiSelect = (questionId: string, option: string) => {
//         setAnswers((prev) => {
//             const currentSelection = (prev[questionId] as string[]) || []
//             if (currentSelection.includes(option)) {
//                 return { ...prev, [questionId]: currentSelection.filter((item) => item !== option) }
//             } else {
//                 return { ...prev, [questionId]: [...currentSelection, option] }
//             }
//         })
//     }

//     const handleNext = () => {
//         if (currentQuestionIndex < questions.length - 1) {
//             setCurrentQuestionIndex((prev) => prev + 1)
//         }
//     }

//     const handlePrevious = () => {
//         if (currentQuestionIndex > 0) {
//             setCurrentQuestionIndex((prev) => prev - 1)
//         }
//     }

//     // const handleSubmit = async () => {
//     //     try {
//     //         await emailjs.send(
//     //             EMAILJS_SERVICE_ID,
//     //             EMAILJS_TEMPLATE_ID,
//     //             {
//     //                 from_name: answers.fullName,
//     //                 from_email: answers.email,
//     //                 phone: answers.phone,
//     //                 message: answers,
//     //             },
//     //             EMAILJS_PUBLIC_KEY
//     //         )
//     //         toast({ title: "Questionnaire submitted successfully!" })
//     //     } catch (error) {
//     //         console.error("Error sending email:", error)
//     //         toast({ title: "Failed to submit questionnaire. Please try again.", variant: "destructive", })
//     //     }
//     // }

//     const handleSubmit = async () => {
//         try {
//             const formattedMessage = Object.entries(answers)
//                 .map(([key, value]) => {
//                     // Convert array values (from multiselect fields) into a readable string
//                     if (Array.isArray(value)) {
//                         return `${questions.find(q => q.id === key)?.question}: ${value.join(", ")}`
//                     }
//                     return `${questions.find(q => q.id === key)?.question}: ${value}`
//                 })
//                 .join("\n");

//             await emailjs.send(
//                 EMAILJS_SERVICE_ID,
//                 EMAILJS_TEMPLATE_ID,
//                 {
//                     from_name: answers.fullName,
//                     from_email: answers.email,
//                     phone: answers.phone,
//                     message: formattedMessage, // Now it's a readable formatted string
//                 },
//                 EMAILJS_PUBLIC_KEY
//             );

//             toast({ title: "Questionnaire submitted successfully!" });
//         } catch (error) {
//             console.error("Error sending email:", error);
//             toast({ title: "Failed to submit questionnaire. Please try again.", variant: "destructive" });
//         }
//     };


//     const currentQuestion = questions[currentQuestionIndex]

//     return (
//         <div className="min-h-screen p-6 pt-40">
//             <h1 className="text-white text-3xl font-semibold mb-12 text-center">Interior Design Questionnaire</h1>
//             <div className="max-w-[570px] mx-auto">
//                 <motion.div className="flex flex-col gap-6 overflow-visible" layout transition={transitionProps}>
//                     <h2 className="text-white text-xl mb-4">{currentQuestion.question}</h2>
//                     {currentQuestion.type === "multiselect" && (
//                         <div className="flex flex-wrap gap-3">
//                             {currentQuestion.options?.map((option) => {
//                                 const isSelected = ((answers[currentQuestion.id] as string[]) || []).includes(option)
//                                 return (
//                                     <motion.button
//                                         key={option}
//                                         onClick={() => handleMultiSelect(currentQuestion.id, option)}
//                                         layout
//                                         initial={false}
//                                         animate={{
//                                             backgroundColor: isSelected ? "#2a1711" : "rgba(39, 39, 42, 0.5)",
//                                         }}
//                                         whileHover={{
//                                             backgroundColor: isSelected ? "#2a1711" : "rgba(39, 39, 42, 0.8)",
//                                         }}
//                                         whileTap={{
//                                             backgroundColor: isSelected ? "#1f1209" : "rgba(39, 39, 42, 0.9)",
//                                         }}
//                                         transition={{
//                                             ...transitionProps,
//                                             backgroundColor: { duration: 0.1 },
//                                         }}
//                                         className={`inline-flex items-center px-4 py-2 rounded-full text-base font-medium whitespace-nowrap overflow-hidden ring-1 ring-inset 
//                                             ${isSelected ? "text-[#ff9066] ring-[hsla(0,0%,100%,0.12)]"
//                                                 : "text-zinc-400 ring-[hsla(0,0%,100%,0.06)]"}`
//                                         }
//                                     >
//                                         <motion.div
//                                             className="relative flex items-center"
//                                             animate={{
//                                                 width: isSelected ? "auto" : "100%",
//                                                 paddingRight: isSelected ? "1.5rem" : "0",
//                                             }}
//                                             transition={{
//                                                 ease: [0.175, 0.885, 0.32, 1.275],
//                                                 duration: 0.3,
//                                             }}
//                                         >
//                                             <span>{option}</span>
//                                             <AnimatePresence>
//                                                 {isSelected && (
//                                                     <motion.span
//                                                         initial={{ scale: 0, opacity: 0 }}
//                                                         animate={{ scale: 1, opacity: 1 }}
//                                                         exit={{ scale: 0, opacity: 0 }}
//                                                         transition={transitionProps}
//                                                         className="absolute right-0"
//                                                     >
//                                                         <div className="w-4 h-4 rounded-full bg-[#ff9066] flex items-center justify-center">
//                                                             <Check className="w-3 h-3 text-[#2a1711]" strokeWidth={1.5} />
//                                                         </div>
//                                                     </motion.span>
//                                                 )}
//                                             </AnimatePresence>
//                                         </motion.div>
//                                     </motion.button>
//                                 )
//                             })}
//                         </div>
//                     )}
//                     {(currentQuestion.type === "text" ||
//                         currentQuestion.type === "email" ||
//                         currentQuestion.type === "tel" ||
//                         currentQuestion.type === "number") && (
//                             <Input
//                                 type={currentQuestion.type}
//                                 value={(answers[currentQuestion.id] as string) || ""}
//                                 onChange={(e) => handleInputChange(currentQuestion.id, e.target.value)}
//                                 className="text-black px-4 py-2 rounded-md w-full"
//                             />
//                         )}
//                     {currentQuestion.type === "textarea" && (
//                         <textarea
//                             value={(answers[currentQuestion.id] as string) || ""}
//                             onChange={(e) => handleInputChange(currentQuestion.id, e.target.value)}
//                             className="text-white px-4 py-2 rounded-md w-full h-32"
//                         />
//                     )}
//                     {currentQuestion.type === "select" && (

//                         <Select
//                             onValueChange={(value) => handleInputChange(currentQuestion.id, value)}
//                             defaultValue={(answers[currentQuestion.id] as string) || ""}
//                         >
//                             <SelectTrigger>
//                                 <SelectValue placeholder="Select an option" />
//                             </SelectTrigger>
//                             <SelectContent>
//                                 {currentQuestion.options?.map((option) => (
//                                     <SelectItem key={option} value={option}>
//                                         {option}
//                                     </SelectItem>
//                                 ))}
//                             </SelectContent>
//                         </Select>
//                     )}
//                     <div className="flex justify-between mt-6">
//                         <Button
//                             onClick={handlePrevious}
//                             disabled={currentQuestionIndex === 0}
//                             className="bg-zinc-700 text-white px-4 py-2 rounded-md disabled:opacity-50"
//                         >
//                             Previous
//                         </Button>
//                         {currentQuestionIndex === questions.length - 1 ? (
//                             <Button
//                                 onClick={handleSubmit}
//                                 className="bg-[#ff9066] text-[#2a1711] px-4 py-2 rounded-md flex items-center gap-2"
//                             >
//                                 Submit <Send size={16} />
//                             </Button>
//                         ) : (
//                             <Button onClick={handleNext} className="bg-[#ff9066] text-[#2a1711] px-4 py-2 rounded-md">
//                                 Next
//                             </Button>
//                         )}
//                     </div>
//                 </motion.div>
//             </div>
//             <Toaster />
//         </div>
//     )
// }



export default function InteriorDesignQuestionnaire() {
    const [answers, setAnswers] = useState<Record<string, string | string[]>>({})
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)

    const handleInputChange = (questionId: string, value: string | string[]) => {
        setAnswers((prev) => ({ ...prev, [questionId]: value }))
    }

    const handleMultiSelect = (questionId: string, option: string) => {
        setAnswers((prev) => {
            const currentSelection = (prev[questionId] as string[]) || []
            if (currentSelection.includes(option)) {
                return { ...prev, [questionId]: currentSelection.filter((item) => item !== option) }
            } else {
                return { ...prev, [questionId]: [...currentSelection, option] }
            }
        })
    }

    const handleNext = () => {
        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex((prev) => prev + 1)
        }
    }

    const handlePrevious = () => {
        if (currentQuestionIndex > 0) {
            setCurrentQuestionIndex((prev) => prev - 1)
        }
    }

    const handleSubmit = async () => {
        try {
            const formattedMessage = Object.entries(answers)
                .map(([key, value]) => {
                    if (Array.isArray(value)) {
                        return `${questions.find(q => q.id === key)?.question}: ${value.join(", ")}`
                    }
                    return `${questions.find(q => q.id === key)?.question}: ${value}`
                })
                .join("\n");

            await emailjs.send(
                EMAILJS_SERVICE_ID,
                EMAILJS_TEMPLATE_ID,
                {
                    from_name: answers.fullName,
                    from_email: answers.email,
                    phone: answers.phone,
                    message: formattedMessage,
                },
                EMAILJS_PUBLIC_KEY
            );

            toast({ title: "Questionnaire submitted successfully!" });
        } catch (error) {
            console.error("Error sending email:", error);
            toast({ title: "Failed to submit questionnaire. Please try again.", variant: "destructive" });
        }
    };

    const currentQuestion = questions[currentQuestionIndex]

    return (
        <div className="min-h-screen p-6 pt-40 bg-slate-300 text-black">
            <h1 className="text-black text-3xl font-semibold mb-12 text-center">Interior Design Questionnaire</h1>
            <div className="max-w-[570px] mx-auto">
                <motion.div className="flex flex-col gap-6 overflow-visible" layout transition={transitionProps}>
                    <h2 className="text-black text-xl mb-4">{currentQuestion.question}</h2>

                    {currentQuestion.type === "multiselect" && (
                        <div className="flex flex-wrap gap-3">
                            {currentQuestion.options?.map((option) => {
                                const isSelected = ((answers[currentQuestion.id] as string[]) || []).includes(option)
                                return (
                                    <motion.button
                                        key={option}
                                        onClick={() => handleMultiSelect(currentQuestion.id, option)}
                                        layout
                                        initial={false}
                                        animate={{
                                            backgroundColor: isSelected ? "#3D0C11" : "#E5E7EB", // Light gray default
                                            color: isSelected ? "#FFFFFF" : "#000000",
                                        }}
                                        whileHover={{
                                            backgroundColor: isSelected ? "#3D0C11" : "#D1D5DB", // Slightly darker on hover
                                        }}
                                        whileTap={{
                                            backgroundColor: "#3D0C11", // Keep consistent on tap
                                        }}
                                        transition={{
                                            ...transitionProps,
                                            backgroundColor: { duration: 0.1 },
                                        }}
                                        className={`inline-flex items-center px-4 py-2 rounded-full text-base font-medium whitespace-nowrap overflow-hidden 
                                            ${isSelected ? "text-white"
                                                : "text-black"}`
                                        }
                                    >
                                        <motion.div
                                            className="relative flex items-center"
                                            animate={{
                                                width: isSelected ? "auto" : "100%",
                                                paddingRight: isSelected ? "1.5rem" : "0",
                                            }}
                                            transition={{
                                                ease: [0.175, 0.885, 0.32, 1.275],
                                                duration: 0.3,
                                            }}
                                        >
                                            <span>{option}</span>
                                            <AnimatePresence>
                                                {isSelected && (
                                                    <motion.span
                                                        initial={{ scale: 0, opacity: 0 }}
                                                        animate={{ scale: 1, opacity: 1 }}
                                                        exit={{ scale: 0, opacity: 0 }}
                                                        transition={transitionProps}
                                                        className="absolute right-0"
                                                    >
                                                        <div className="w-4 h-4 rounded-full bg-white flex items-center justify-center">
                                                            <Check className="w-3 h-3 text-[#000000]" strokeWidth={1.5} />
                                                        </div>
                                                    </motion.span>
                                                )}
                                            </AnimatePresence>
                                        </motion.div>
                                    </motion.button>
                                )
                            })}
                        </div>
                    )}

                    {(currentQuestion.type === "text" ||
                        currentQuestion.type === "email" ||
                        currentQuestion.type === "tel" ||
                        currentQuestion.type === "number") && (
                            <Input
                                type={currentQuestion.type}
                                value={(answers[currentQuestion.id] as string) || ""}
                                onChange={(e) => handleInputChange(currentQuestion.id, e.target.value)}
                                className="bg-white border border-gray-300 text-black px-4 py-2 rounded-md w-full focus:ring-2 focus:ring-gray-500"
                            />
                        )}

                    {currentQuestion.type === "textarea" && (
                        <textarea
                            value={(answers[currentQuestion.id] as string) || ""}
                            onChange={(e) => handleInputChange(currentQuestion.id, e.target.value)}
                            className="bg-white border border-gray-300 text-black px-4 py-2 rounded-md w-full h-32 focus:ring-2 focus:ring-gray-500"
                        />
                    )}

                    {currentQuestion.type === "select" && (
                        <Select
                            onValueChange={(value) => handleInputChange(currentQuestion.id, value)}
                            defaultValue={(answers[currentQuestion.id] as string) || ""}
                        >
                            <SelectTrigger className="bg-white border border-gray-300 text-black px-4 py-2 rounded-md">
                                <SelectValue placeholder="Select an option" />
                            </SelectTrigger>
                            <SelectContent className="bg-white border border-gray-300 text-black">
                                {currentQuestion.options?.map((option) => (
                                    <SelectItem key={option} value={option}>
                                        {option}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    )}

                    <div className="flex justify-between mt-6">
                        <Button
                            onClick={handlePrevious}
                            disabled={currentQuestionIndex === 0}
                            className="bg-gray-200 text-black px-4 py-2 rounded-md disabled:opacity-50"
                            variant="outline"
                        >
                            Previous
                        </Button>
                        {currentQuestionIndex === questions.length - 1 ? (
                            <Button
                                onClick={handleSubmit}
                                className="text-white px-4 py-2 rounded-md flex items-center gap-2"
                                variant="default"
                            >
                                Submit <Send size={16} />
                            </Button>
                        ) : (
                            <Button onClick={handleNext} className="text-white px-4 py-2 rounded-md" variant="default">
                                Next
                            </Button>
                        )}
                    </div>
                </motion.div>
            </div>
            <Toaster />
        </div>
    )
}
