import { QuestsTask } from '../../types/quest';
import { STORAGE_KEYS } from '../../../src/mocks/constants';

// Function to retrieve quests from localStorage
export const getQuestsTask = (): QuestsTask[] => {
  const tasks = localStorage.getItem(STORAGE_KEYS.TASKS);
  return tasks ? JSON.parse(tasks) : [];
};

// Function to set quests to localStorage
export const setQuestsTask = (tasks: QuestsTask[]) => {
  localStorage.setItem(STORAGE_KEYS.TASKS, JSON.stringify(tasks));
};

// Function to initialize quests data if it doesn't exist
export const initializeQuestsTask = () => {
  const tasks = getQuestsTask();
  if (tasks.length === 0) {
    const initialQuestsTask: QuestsTask[] = [
      {
        id: '4355f274-f670-4e11-a413-c95170923458',
        target_name: 'Обрати базовий клас',
        choose_class: [
          {
            name: 'Винахідник UX/UI',
            description:
              'Винахідник UX/UI - майстер невидимих cтежок і зодчий зручності. Він створює магічні карти інтерфейсів, по яких легко пересуваються воїни та мудреці. Кожна кнопка, кожне вікно на екрані — його творіння, зроблене з мудрістю та увагою до найдрібніших деталей. Він знає, як звернути погляд і повести за собою, передбачаючи  кожен крок  користувача.',
          },
          {
            name: 'Воїн фронтенду',
            description:
              'Воїн фронтенду - страж кордонів королівства інтерфейсу користувача. З мечем в одній руці і кодом в іншій, він втілює в реальність задуми Винахідника. Його обладунки вкриті символами HTML, CSS і JavaScript, а меч його - гострий, як розмітка, яку він створює. Легко та граціозно він вибудовує вежі та замки веб-сторінок, захищаючи їх від негараздів та роблячи їх готовими до бою.',
          },
        ],
        links: [],
      },
      {
        name: 'Створення мобільного лендингу',
        id: '32948200-586b-42c2-b708-716e87f0a028',
        description: `Лендинг (Landing Page) — це вебсторінка, створена з єдиною метою: спонукати до певної дії.
        Він може запропонувати відвідувачу будь-що — від підписки на новини до придбання онлайн-курсу або кавомашини. 
        Однією з найвагоміших переваг лендингу є те, що він працює 24/7, розповідаючи про продукти та послуги, 
        залучаючи потенційних клієнтів та збільшуючи продажі.`,
        links: [
          {
            front: [
              {
                figma: [
                  'https://www.figma.com/design/GRJdeejCrvlYcfcxTLUQdH/Pet-Care---Landing-page-(Copy)?node-id=27-1&t=qo2FtnAs9vmqUvKV-1',
                  'https://www.figma.com/design/NTtyIrVaDFaRZOSekbghOe/Aveji?node-id=0-1&t=YMYsafhkk5rA6zLd-1',
                ],
              },
              {
                technics_task:
                  'https://docs.google.com/document/d/14Vw1xJ7ob4nGGgZKyrtX4VvdX1_ttgsa0cHJXu0mA_E/edit?usp=sharing',
              },
            ],
          },
          {
            ux_ui: [
              {
                figma: [],
              },
              {
                technics_task:
                  'https://docs.google.com/document/d/1s9BjaCvxEsng2AabZScmBrQi-NqwomXVqhVb0UfFvNQ/edit?usp=sharing',
              },
            ],
          },
        ],
      },
      {
        name: '',
        id: '',
        description: ``,
        links: [],
      },
      {
        name: '',
        id: '',
        description: ``,
        links: [],
      },
    ];
    setQuestsTask(initialQuestsTask);
  }
};

initializeQuestsTask();
