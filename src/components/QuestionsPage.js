import React, { useState } from 'react';

function QuestionsPage() {
    const [step, setStep] = useState(0);

    const nextStep = () => setStep(prevStep => prevStep + 1);
    const prevStep = () => setStep(prevStep => Math.max(prevStep - 1, 0));

    const questions = [
        {
            title: "Personal Information",
            fields: [
                { label: "Are you currently residing in the U.S. or abroad?", name: "residence", type: "text" },
                { label: "What is your citizenship status?", name: "citizenship", type: "text" },
                { label: "What is your first language?", name: "language", type: "text" },
                { label: "Have you completed your high school education?", name: "highSchoolCompleted", type: "text" },
                { label: "If yes, where (U.S./abroad)?", name: "highSchoolLocation", type: "text" },
            ]
        },
        {
            title: "Academic Performance",
            fields: [
                { label: "What is your current GPA (unweighted/weighted)?", name: "gpa", type: "text" },
                { label: "What is your SAT score? (Break it down by sections if applicable)", name: "sat", type: "text" },
                { label: "What is your ACT score? (If applicable)", name: "act", type: "text" },
                { label: "Have you taken any AP, IB, or Honors courses?", name: "advancedCourses", type: "text" },
                { label: "If yes, how many and which subjects?", name: "advancedSubjects", type: "text" },
                { label: "What is your class rank? (If available)", name: "classRank", type: "text" },
            ]
        },
        {
            title: "Standardized Test Scores",
            fields: [
                { label: "Have you taken SAT Subject Tests?", name: "satSubjects", type: "text" },
                { label: "If yes, which subjects and what were your scores?", name: "satSubjectScores", type: "text" },
                { label: "Have you taken any English proficiency tests (e.g., TOEFL, IELTS)?", name: "englishProficiency", type: "text" },
                { label: "If yes, what was your score?", name: "englishProficiencyScore", type: "text" },
            ]
        },
        {
            title: "Major Choice and Areas of Interest",
            fields: [
                { label: "What major(s) are you interested in pursuing?", name: "major", type: "text" },
                { label: "Are you interested in any specific fields? (e.g., Technology, Finance, Medicine, Arts, etc.)", name: "fieldsOfInterest", type: "text" },
                { label: "Are you open to related fields or interdisciplinary programs?", name: "relatedFields", type: "text" },
                { label: "Do you have a specific career goal in mind?", name: "careerGoal", type: "text" },
                { label: "Would you prefer colleges that are strong in specific areas of interest? (e.g., entrepreneurship, research, innovation)", name: "areaOfInterestStrength", type: "text" },
            ]
        },
        {
            title: "Extracurricular Activities",
            fields: [
                { label: "What sports or activities do you participate in?", name: "sportsActivities", type: "text" },
                { label: "At what level (school, state, national, international)?", name: "activityLevel", type: "text" },
                { label: "What other extracurricular activities are you involved in? (Clubs, volunteer work, arts, etc.)", name: "otherActivities", type: "text" },
                { label: "Provide details on leadership roles or significant achievements.", name: "leadershipRoles", type: "text" },
                { label: "Have you received any awards or recognition for these activities? If yes, specify.", name: "activityAwards", type: "text" },
            ]
        },
        {
            title: "Personal Achievements",
            fields: [
                { label: "Do you have any notable personal achievements? (E.g., science fairs, coding competitions, publications)", name: "personalAchievements", type: "text" },
                { label: "Have you participated in any internships, work experience, or community service?", name: "internshipsExperience", type: "text" },
                { label: "If yes, provide details.", name: "internshipDetails", type: "text" },
            ]
        },
        {
            title: "Location Preferences",
            fields: [
                { label: "Do you have a preference for studying in a specific region or state within the U.S.?", name: "locationPreference", type: "text" },
                { label: "Do you prefer urban, suburban, or rural settings?", name: "settingPreference", type: "text" },
                { label: "Are you interested in studying abroad or participating in exchange programs?", name: "studyAbroadInterest", type: "text" },
            ]
        },
        {
            title: "College Type Preferences",
            fields: [
                { label: "What type of college are you looking for? (Public, private, liberal arts, research university, etc.)", name: "collegeType", type: "text" },
                { label: "Do you prefer a large university, medium-sized college, or a small college?", name: "collegeSizePreference", type: "text" },
                { label: "Are you interested in community colleges or transfer programs?", name: "communityCollegeInterest", type: "text" },
                { label: "Would you prefer a college with strong rankings in specific areas? (e.g., top engineering schools, top business schools)", name: "rankingPreference", type: "text" },
            ]
        },
        {
            title: "Financial Considerations",
            fields: [
                { label: "What is your budget for college?", name: "budget", type: "text" },
                { label: "Are you looking for colleges that offer need-based financial aid or merit scholarships?", name: "financialAidInterest", type: "text" },
                { label: "Are you a first-generation college student?", name: "firstGenerationStudent", type: "text" },
                { label: "Do you plan to work part-time while studying?", name: "partTimeWork", type: "text" },
                { label: "Do you require colleges that offer financial support for international students?", name: "internationalSupport", type: "text" },
            ]
        },
        {
            title: "Social and Campus Life",
            fields: [
                { label: "What kind of campus culture are you looking for? (E.g., highly social, academically focused, diverse, etc.)", name: "campusCulture", type: "text" },
                { label: "Are you interested in joining Greek life or other social organizations?", name: "greekLifeInterest", type: "text" },
                { label: "Do you have any special needs or preferences related to housing, food, or accessibility?", name: "specialNeedsPreferences", type: "text" },
                { label: "Are you looking for colleges with strong international student support services?", name: "internationalSupportServices", type: "text" },
            ]
        },
        {
            title: "Application Strategy",
            fields: [
                { label: "Do you plan to apply early decision/early action?", name: "earlyDecision", type: "text" },
                { label: "Are you looking for colleges that do not require standardized test scores? (Test-optional/test-blind)", name: "testOptional", type: "text" },
                { label: "Would you like to include reach schools, match schools, and safety schools in your list?", name: "schoolTypes", type: "text" },
            ]
        },
        {
            title: "Additional Preferences",
            fields: [
                { label: "Do you have any religious or cultural preferences for the college you attend?", name: "religiousPreferences", type: "text" },
                { label: "Are you interested in schools with specific programs or facilities? (e.g., research labs, study abroad opportunities, strong alumni networks)", name: "specificPrograms", type: "text" },
                { label: "Do you have a preference for colleges with specific rankings or reputation?", name: "reputationPreference", type: "text" },
            ]
        },
        {
            title: "Diversity and Inclusion",
            fields: [
                { label: "Is diversity an important factor in your college selection?", name: "diversityImportance", type: "text" },
                { label: "Are you looking for colleges with specific support services? (E.g., for LGBTQ+ students, veterans, international students)", name: "specificSupportServices", type: "text" },
            ]
        },
        {
            title: "Special Circumstances",
            fields: [
                { label: "Do you have any unique circumstances that should be considered? (e.g., family obligations, health issues, visa requirements for international students)", name: "specialCircumstances", type: "text" },
            ]
        }
    ];


    return (
        <div className="questions-page">
            <h2>{questions[step].title}</h2>
            <form className="question-form">
                {questions[step].fields.map((field, index) => (
                    <div className="question" key={index}>
                        <label>{field.label}</label>
                        <input type={field.type} name={field.name} required />
                    </div>
                ))}
                <div className="navigation-buttons">
                    {step > 0 && (
                        <button type="button" className="nav-arrow prev-arrow" onClick={prevStep}>
                            &lt;
                        </button>
                    )}
                    {step < questions.length - 1 && (
                        <button type="button" className="nav-arrow next-arrow" onClick={nextStep}>
                            &gt;
                        </button>
                    )}
                </div>
            </form>
        </div>
    );
}

export default QuestionsPage;
