import React from 'react';
import { SectionTitle } from './ui/SectionTitle';
import { EducationCard } from './ui/EducationCard';

const education = [
  {
    degree: ' Bachelor of Computer Information System (BCIS)',
    institution: 'Crimson College of Technology, Butwal, Nepal',
    period: '2022 - present',
  },
  {
    degree: 'Senior Secondary (+2)',
    institution: 'Kalika Manavgyan Secondary School, Butwal, Nepal',
    period: '2019 - 2021',
  },
];

export function Education() {
  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-8">
        <SectionTitle>Education</SectionTitle>
        <div className="max-w-5xl mx-auto space-y-10">
          {education.map((edu, index) => (
            <EducationCard key={edu.degree} {...edu} isLast={index === education.length - 1} />
          ))}
        </div>
      </div>
    </section>
  );
}
