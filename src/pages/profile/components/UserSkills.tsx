import { useState } from 'react';
import SKILLS from '../../../mocks/db/skills.json';
import modalActions from 'store/modalWindows/modalWindows';
import { useAppDispatch, useAppSelector } from 'store/hooks';

const UserSkills = () => {
  const frontendSkills = SKILLS.frontend_developer;
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useAppDispatch();
  const selectedSkills = useAppSelector((state) => state.modal.selectedSkills);

  const toggleSkill = (skill: string) => {
    dispatch(
      modalActions.setSelected(
        selectedSkills.includes(skill)
          ? selectedSkills.filter((s) => s !== skill)
          : [...selectedSkills, skill],
      ),
    );
  };
  return (
    <div>
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="mt-4 text-lg font-bold underline"
      >
        Навички {isOpen ? '▲' : '▼'}
      </button>

      {isOpen && (
        <div className="ml-5 mt-2">
          {Object.entries(frontendSkills).map(([category, skills]) => (
            <div key={category} className="mb-4">
              <h3 className="text-md mb-1 font-semibold">{category.replace(/_/g, ' ')}</h3>

              {Array.isArray(skills) ? (
                <ul className="ml-4 list-none space-y-1">
                  {skills.map((skill) => (
                    <li key={skill}>
                      <label className="flex cursor-pointer items-center gap-2">
                        <input
                          type="checkbox"
                          checked={selectedSkills.includes(skill)}
                          onChange={() => toggleSkill(skill)}
                        />
                        <span>{skill}</span>
                      </label>
                    </li>
                  ))}
                </ul>
              ) : (
                Object.entries(skills).map(([subCategory, subSkills]) => (
                  <div key={subCategory} className="ml-4">
                    <h4 className="mt-2 font-medium">{subCategory.replace(/_/g, ' ')}</h4>
                    <ul className="ml-4 list-none space-y-1">
                      {subSkills.map((skill) => (
                        <li key={skill}>
                          <label className="flex cursor-pointer items-center gap-2">
                            <input
                              type="checkbox"
                              checked={selectedSkills.includes(skill)}
                              onChange={() => toggleSkill(skill)}
                            />
                            <span>{skill}</span>
                          </label>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))
              )}
            </div>
          ))}
        </div>
      )}

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
