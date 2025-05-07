import { useState } from 'react';
import SKILLS from '../../../mocks/db/skills.json';

const UserSkills = () => {
  const frontendSkills = SKILLS.frontend_developer;
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);

  const toggleSkill = (skill: string) => {
    setSelectedSkills((prev) =>
      prev.includes(skill) ? prev.filter((s) => s !== skill) : [...prev, skill],
    );
  };

  return (
    <div>
      {Object.entries(frontendSkills).map(([category, skills]) => (
        <div key={category}>
          <h3 className="mt-4 text-lg font-bold">{category.replace(/_/g, ' ')}</h3>
          <div className="ml-5 list-disc">
            {Array.isArray(skills)
              ? skills.map((skill) => (
                  <li
                    key={skill}
                    onClick={() => toggleSkill(skill)}
                    className={`cursor-pointer ${
                      selectedSkills.includes(skill) ? 'font-semibold text-blue-500' : ''
                    }`}
                  >
                    {skill}
                  </li>
                ))
              : Object.entries(skills).map(([subCategory, subSkills]) => (
                  <div key={subCategory}>
                    <h4 className="font-semibold uppercase">{subCategory.replace(/_/g, ' ')}</h4>
                    <ul className="ml-5 list-disc">
                      {subSkills.map((skill) => (
                        <li
                          key={skill}
                          onClick={() => toggleSkill(skill)}
                          className={`cursor-pointer ${
                            selectedSkills.includes(skill) ? 'font-semibold text-blue-500' : ''
                          }`}
                        >
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
          </div>
        </div>
      ))}

      <div className="mt-6 rounded border p-4">
        <h3 className="text-xl font-bold">Вибрані навички:</h3>
        {selectedSkills.length > 0 ? (
          <ul className="ml-5 list-disc">
            {selectedSkills.map((skill) => (
              <li key={skill} className="font-semibold text-green-600">
                {skill}
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">Жодної навички не вибрано</p>
        )}
      </div>
    </div>
  );
};

export default UserSkills;
