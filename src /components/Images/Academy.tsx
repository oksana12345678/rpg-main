import CoursesSrc from 'assets/images/academy/courses.png';
import CoachingSrc from 'assets/images/academy/coaching.png';
import MentoringSrc from 'assets/images/academy/mentoring.png';

import { createImageComponent } from 'utils/createImageComponent';

export const Courses = createImageComponent({ src: CoursesSrc, alt: 'courses' });
export const Coaching = createImageComponent({ src: CoachingSrc, alt: 'coaching' });
export const Mentoring = createImageComponent({ src: MentoringSrc, alt: 'mentoring' });
