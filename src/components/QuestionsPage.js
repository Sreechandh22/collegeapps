import React, { useState } from 'react';

function QuestionsPage() {
    const [step, setStep] = useState(0);
    const [responses, setResponses] = useState({});

    const handleInputChange = (e) => {
        setResponses({
            ...responses,
            [e.target.name]: e.target.value,
        });
    };

    const questions = [
        {
            title: "Personal Information",
            fields: [
                {
                    label: "Are you currently residing in the U.S. or abroad?",
                    name: "residence",
                    type: "select",
                    options: ["U.S.", "Abroad"],
                },
                {
                    label: "What is your citizenship status?",
                    name: "citizenship",
                    type: "select",
                    options: ["U.S. Citizen", "Permanent Resident", "International Student"],
                },
                {
                    label: "What is your first language?",
                    name: "language",
                    type: "text",
                },
                {
                    label: "Have you completed your high school education?",
                    name: "highSchoolCompleted",
                    type: "select",
                    options: ["Yes", "No"],
                },
                {
                    label: "If yes, where (U.S./abroad)?",
                    name: "highSchoolLocation",
                    type: "select",
                    condition: "highSchoolCompleted",
                    conditionValue: "Yes",
                    options: ["U.S.", "Abroad"],
                },
            ],
        },
        {
            title: "Academic Performance",
            fields: [
                {
                    label: "What is your current GPA (unweighted/weighted)?",
                    name: "gpa",
                    type: "select",
                    options: ["Below 2.0", "2.0 - 2.5", "2.5 - 3.0", "3.0 - 3.5", "3.5 - 4.0", "Above 4.0"],
                },
                {
                    label: "What is your SAT score? (Break it down by sections if applicable)",
                    name: "sat",
                    type: "text",
                },
                {
                    label: "What is your ACT score? (If applicable)",
                    name: "act",
                    type: "text",
                },
                {
                    label: "Have you taken any AP, IB, or Honors courses?",
                    name: "advancedCourses",
                    type: "select",
                    options: ["Yes", "No"],
                },
                {
                    label: "If yes, how many and which subjects?",
                    name: "advancedSubjects",
                    type: "text",
                    condition: "advancedCourses", 
                    conditionValue: "Yes",
                },
                {
                    label: "What is your class rank? (If available)",
                    name: "classRank",
                    type: "text",
                },
            ],
        },
        {
            title: "Standardized Test Scores",
            fields: [
                {
                    label: "Have you taken any English proficiency tests (e.g., TOEFL, IELTS)?",
                    name: "englishProficiency",
                    type: "select",
                    options: ["No", "TOEFL", "IELTS"],
                },
                {
                    label: "What was your overall TOEFL score?",
                    name: "toeflScore",
                    type: "text",
                    condition: "englishProficiency",
                    conditionValue: "TOEFL",
                },
                {
                    label: "TOEFL Reading Score",
                    name: "toeflReading",
                    type: "text",
                    condition: "englishProficiency",
                    conditionValue: "TOEFL",
                },
                {
                    label: "TOEFL Listening Score",
                    name: "toeflListening",
                    type: "text",
                    condition: "englishProficiency",
                    conditionValue: "TOEFL",
                },
                {
                    label: "TOEFL Speaking Score",
                    name: "toeflSpeaking",
                    type: "text",
                    condition: "englishProficiency",
                    conditionValue: "TOEFL",
                },
                {
                    label: "TOEFL Writing Score",
                    name: "toeflWriting",
                    type: "text",
                    condition: "englishProficiency",
                    conditionValue: "TOEFL",
                },
                {
                    label: "What was your overall IELTS score?",
                    name: "ieltsScore",
                    type: "text",
                    condition: "englishProficiency",
                    conditionValue: "IELTS",
                },
                {
                    label: "IELTS Listening Score",
                    name: "ieltsListening",
                    type: "text",
                    condition: "englishProficiency",
                    conditionValue: "IELTS",
                },
                {
                    label: "IELTS Reading Score",
                    name: "ieltsReading",
                    type: "text",
                    condition: "englishProficiency",
                    conditionValue: "IELTS",
                },
                {
                    label: "IELTS Writing Score",
                    name: "ieltsWriting",
                    type: "text",
                    condition: "englishProficiency",
                    conditionValue: "IELTS",
                },
                {
                    label: "IELTS Speaking Score",
                    name: "ieltsSpeaking",
                    type: "text",
                    condition: "englishProficiency",
                    conditionValue: "IELTS",
                },
            ],
        },
                {
            title: "Major Choice and Areas of Interest",
            fields: [
                {
                    label: "What major(s) are you interested in pursuing?",
                    name: "major",
                    type: "text",
                },
                {
                    label: "Are you interested in any specific fields? (e.g., Technology, Finance, Medicine, Arts, etc.)",
                    name: "fieldsOfInterest",
                    type: "text",
                },
                {
                    label: "Are you open to related fields or interdisciplinary programs?",
                    name: "relatedFields",
                    type: "select",
                    options: ["Yes", "No"],
                },
                {
                    label: "Do you have a specific career goal in mind?",
                    name: "careerGoal",
                    type: "text",
                },
                {
                    label: "Would you prefer colleges that are strong in specific areas of interest? (e.g., entrepreneurship, research, innovation)",
                    name: "areaOfInterestStrength",
                    type: "text",
                },
            ],
        },
        {
            title: "Extracurricular Activities",
            fields: [
                {
                    label: "What sports or activities do you participate in?",
                    name: "sportsActivities",
                    type: "text",
                },
                {
                    label: "At what level (school, state, national, international)?",
                    name: "activityLevel",
                    type: "select",
                    options: ["School", "State", "National", "International"],
                },
                {
                    label: "What other extracurricular activities are you involved in? (Clubs, volunteer work, arts, etc.)",
                    name: "otherActivities",
                    type: "text",
                },
                {
                    label: "Provide details on leadership roles or significant achievements.",
                    name: "leadershipRoles",
                    type: "text",
                },
                {
                    label: "Have you received any awards or recognition for these activities? If yes, specify.",
                    name: "activityAwards",
                    type: "text",
                },
            ],
        },
        {
            title: "Personal Achievements",
            fields: [
                {
                    label: "Do you have any notable personal achievements? (E.g., science fairs, coding competitions, publications)",
                    name: "personalAchievements",
                    type: "text",
                },
                {
                    label: "Have you participated in any internships, work experience, or community service?",
                    name: "internshipsExperience",
                    type: "select",
                    options: ["Yes", "No"],
                },
                {
                    label: "If yes, provide details.",
                    name: "internshipDetails",
                    type: "text",
                    condition: "internshipsExperience", 
                    conditionValue: "Yes",
                },
            ],
        },
        {
            title: "Location Preferences",
            fields: [
                {
                    label: "Do you have a preference for studying in a specific region or state within the U.S.?",
                    name: "locationPreference",
                    type: "text",
                },
                {
                    label: "Do you prefer urban, suburban, or rural settings?",
                    name: "settingPreference",
                    type: "select",
                    options: ["Urban", "Suburban", "Rural"],
                },
                {
                    label: "Are you interested in studying abroad or participating in exchange programs?",
                    name: "studyAbroadInterest",
                    type: "select",
                    options: ["Yes", "No"],
                },
            ],
        },
        {
            title: "College Type Preferences",
            fields: [
                {
                    label: "What type of college are you looking for? (Public, private, liberal arts, research university, etc.)",
                    name: "collegeType",
                    type: "select",
                    options: ["Public", "Private", "Liberal Arts", "Research University"],
                },
                {
                    label: "Do you prefer a large university, medium-sized college, or a small college?",
                    name: "collegeSizePreference",
                    type: "select",
                    options: ["Large University", "Medium-sized College", "Small College"],
                },
                {
                    label: "Are you interested in community colleges or transfer programs?",
                    name: "communityCollegeInterest",
                    type: "select",
                    options: ["Yes", "No"],
                },
                {
                    label: "Would you prefer a college with strong rankings in specific areas? (e.g., top engineering schools, top business schools)",
                    name: "rankingPreference",
                    type: "text",
                },
            ],
        },
        {
            title: "Financial Considerations",
            fields: [
                {
                    label: "What is your budget for college?",
                    name: "budget",
                    type: "select",
                    options: ["Below $20,000", "$20,000 - $40,000", "$40,000 - $60,000", "Above $60,000"],
                },
                {
                    label: "Are you looking for colleges that offer need-based financial aid or merit scholarships?",
                    name: "financialAidInterest",
                    type: "select",
                    options: ["Need-based Financial Aid", "Merit Scholarships", "Both"],
                },
                {
                    label: "Are you a first-generation college student?",
                    name: "firstGenerationStudent",
                    type: "select",
                    options: ["Yes", "No"],
                },
                {
                    label: "Do you plan to work part-time while studying?",
                    name: "partTimeWork",
                    type: "select",
                    options: ["Yes", "No"],
                },
                {
                    label: "Do you require colleges that offer financial support for international students?",
                    name: "internationalSupport",
                    type: "select",
                    options: ["Yes", "No"],
                },
            ],
        },
        {
            title: "Social and Campus Life",
            fields: [
                {
                    label: "What kind of campus culture are you looking for? (E.g., highly social, academically focused, diverse, etc.)",
                    name: "campusCulture",
                    type: "text",
                },
                {
                    label: "Are you interested in joining Greek life or other social organizations?",
                    name: "greekLifeInterest",
                    type: "select",
                    options: ["Yes", "No"],
                },
                {
                    label: "Do you have any special needs or preferences related to housing, food, or accessibility?",
                    name: "specialNeedsPreferences",
                    type: "text",
                },
                {
                    label: "Are you looking for colleges with strong international student support services?",
                    name: "internationalSupportServices",
                    type: "select",
                    options: ["Yes", "No"],
                },
            ],
        },
        {
            title: "Application Strategy",
            fields: [
                {
                    label: "Do you plan to apply early decision/early action?",
                    name: "earlyDecision",
                    type: "select",
                    options: ["Yes", "No"],
                },
                {
                    label: "Are you looking for colleges that do not require standardized test scores? (Test-optional/test-blind)",
                    name: "testOptional",
                    type: "select",
                    options: ["Yes", "No"],
                },
                {
                    label: "Would you like to include reach schools, match schools, and safety schools in your list?",
                    name: "schoolTypes",
                    type: "select",
                    options: ["Yes", "No"],
                },
            ],
        },
        {
            title: "Additional Preferences",
            fields: [
                {
                    label: "Do you have any religious or cultural preferences for the college you attend?",
                    name: "religiousPreferences",
                    type: "text",
                },
                {
                    label: "Are you interested in schools with specific programs or facilities? (e.g., research labs, study abroad opportunities, strong alumni networks)",
                    name: "specificPrograms",
                    type: "text",
                },
                {
                    label: "Do you have a preference for colleges with specific rankings or reputation?",
                    name: "reputationPreference",
                    type: "text",
                },
            ],
        },
        {
            title: "Diversity and Inclusion",
            fields: [
                {
                    label: "Is diversity an important factor in your college selection?",
                    name: "diversityImportance",
                    type: "select",
                    options: ["Yes", "No"],
                },
                {
                    label: "Are you looking for colleges with specific support services? (E.g., for LGBTQ+ students, veterans, international students)",
                    name: "specificSupportServices",
                    type: "select",
                    options: ["Yes", "No"],
                },
            ],
        },
        {
            title: "Special Circumstances",
            fields: [
                {
                    label: "Do you have any unique circumstances that should be considered? (e.g., family obligations, health issues, visa requirements for international students)",
                    name: "specialCircumstances",
                    type: "text",
                },
            ],
        },
    ];

    const totalSteps = questions.length;

    const nextStep = () => setStep((prevStep) => Math.min(prevStep + 1, totalSteps - 1));
    const prevStep = () => setStep((prevStep) => Math.max(prevStep - 1, 0));

    const progressPercentage = ((step + 1) / totalSteps) * 100;

    return (
        <div className="questions-page">
            <div className="progress-bar">
                <div
                    className="progress"
                    style={{ width: `${progressPercentage}%` }}
                ></div>
            </div>
            <h2>{questions[step].title}</h2>
            <form className="question-form">
                {questions[step].fields.map((field, index) => {
                    // Check if the field has a condition and if it's met
                    if (field.condition && responses[field.condition] !== field.conditionValue) {
                        return null;
                    }
                    return (
                        <div className="question" key={index}>
                            <label>{field.label}</label>
                            {field.type === "text" && (
                                <input
                                    type="text"
                                    name={field.name}
                                    value={responses[field.name] || ''}
                                    onChange={handleInputChange}
                                    required
                                />
                            )}
                            {field.type === "select" && (
                               <select
                               name={field.name}
                               value={responses[field.name] || ''}
                               onChange={handleInputChange}
                               required
                           >
                               <option value="" disabled>Select an option</option>
                               {field.options.map((option, i) => (
                                   <option key={i} value={option}>
                                       {option}
                                   </option>
                               ))}
                           </select>
                           
                            )}
                        </div>
                    );
                })}
                <div className="navigation-buttons">
                    {step > 0 && (
                        <button
                            type="button"
                            className="nav-arrow prev-arrow"
                            onClick={prevStep}
                        >
                            &lt;
                        </button>
                    )}
                    {step < totalSteps - 1 && (
                        <button
                            type="button"
                            className="nav-arrow next-arrow"
                            onClick={nextStep}
                        >
                            &gt;
                        </button>
                    )}
                </div>
            </form>
        </div>
    );
}

export default QuestionsPage;
