import { Exercise } from '@/types';

export const exercises: Exercise[] = [
  // Horizontal Push
  {
    id: 'pushup',
    name: 'Push-up',
    category: 'horizontal-push',
    difficulty: 'F',
    learningTime: '1-2 weeks',
    description: 'A fundamental bodyweight exercise that targets the chest, shoulders, and triceps.',
    musclesWorked: ['Chest', 'Shoulders', 'Triceps', 'Core'],
    highTensionAreas: ['Pectorals', 'Anterior Deltoids'],
    steps: [
      'Start in a plank position with hands slightly wider than shoulder-width',
      'Lower your body until your chest nearly touches the floor',
      'Push yourself back up to the starting position',
      'Keep your core engaged throughout the movement'
    ],
    mainExercises: ['Incline Push-up', 'Standard Push-up'],
    accessoryExercises: ['Diamond Push-up', 'Wide Push-up'],
    progression: {
      regression: 'Wall Push-up',
      current: 'Push-up',
      progression: 'Planche Lean',
      target: 'Full Planche'
    }
  },
  {
    id: 'pike-pushup',
    name: 'Pike Push-up',
    category: 'horizontal-push',
    difficulty: 'C',
    learningTime: '2-4 months',
    description: 'An advanced push-up variation that emphasizes shoulder strength.',
    musclesWorked: ['Shoulders', 'Triceps', 'Upper Chest'],
    highTensionAreas: ['Anterior Deltoids', 'Triceps'],
    steps: [
      'Start in a downward dog position with hips raised',
      'Lower your head toward the ground by bending your arms',
      'Push back up to the starting position',
      'Keep your legs as straight as possible'
    ],
    mainExercises: ['Pike Push-up'],
    accessoryExercises: ['Elevated Pike Push-up'],
    progression: {
      regression: 'Push-up',
      current: 'Pike Push-up',
      progression: 'Handstand Push-up',
      target: '90° Push-up'
    }
  },

  // Vertical Push
  {
    id: 'handstand',
    name: 'Handstand',
    category: 'vertical-push',
    difficulty: 'C',
    learningTime: '3-6 months',
    description: 'A foundational skill that requires balance, shoulder strength, and body control.',
    musclesWorked: ['Shoulders', 'Triceps', 'Core', 'Upper Back'],
    highTensionAreas: ['Anterior Deltoids', 'Core Stabilizers'],
    steps: [
      'Start in a lunge position with arms overhead',
      'Kick up or wall-walk into a handstand position',
      'Keep your body straight and tight',
      'Balance on your hands with fingers spread'
    ],
    mainExercises: ['Wall Handstand', 'Freestanding Handstand'],
    accessoryExercises: ['Handstand Holds', 'Handstand Walks'],
    progression: {
      regression: 'Wall Plank',
      current: 'Handstand',
      progression: 'Handstand Push-up',
      target: 'One-Arm Handstand'
    }
  },

  // Horizontal Pull
  {
    id: 'australian_pullup',
    name: 'Australian Pull-up',
    category: 'horizontal-pull',
    difficulty: 'F',
    learningTime: '1-2 weeks',
    description: 'A beginner-friendly horizontal pulling exercise.',
    musclesWorked: ['Back', 'Biceps', 'Rear Deltoids'],
    highTensionAreas: ['Latissimus Dorsi', 'Rhomboids'],
    steps: [
      'Set a bar at waist height',
      'Lie underneath and grab the bar with an overhand grip',
      'Pull your chest to the bar while keeping your body straight',
      'Lower yourself back down with control'
    ],
    mainExercises: ['Australian Pull-up'],
    accessoryExercises: ['Wide Grip Australian Pull-up'],
    progression: {
      regression: 'Assisted Australian Pull-up',
      current: 'Australian Pull-up',
      progression: 'Front Lever Tuck',
      target: 'Front Lever'
    }
  },

  // Vertical Pull
  {
    id: 'pullup',
    name: 'Pull-up',
    category: 'vertical-pull',
    difficulty: 'D',
    learningTime: '1-2 months',
    description: 'A classic vertical pulling exercise that builds back and bicep strength.',
    musclesWorked: ['Back', 'Biceps', 'Forearms', 'Core'],
    highTensionAreas: ['Latissimus Dorsi', 'Biceps'],
    steps: [
      'Hang from a bar with hands slightly wider than shoulder-width',
      'Pull yourself up until your chin clears the bar',
      'Lower yourself back down with control',
      'Keep your core engaged throughout'
    ],
    mainExercises: ['Pull-up'],
    accessoryExercises: ['Chin-up', 'Wide Grip Pull-up'],
    progression: {
      regression: 'Assisted Pull-up',
      current: 'Pull-up',
      progression: 'Muscle-up',
      target: 'One-Arm Pull-up'
    }
  },

  // Legs
  {
    id: 'squat',
    name: 'Squat',
    category: 'legs',
    difficulty: 'F',
    learningTime: '1 week',
    description: 'A fundamental lower body exercise that builds leg strength.',
    musclesWorked: ['Quadriceps', 'Hamstrings', 'Glutes', 'Calves'],
    highTensionAreas: ['Quadriceps', 'Glutes'],
    steps: [
      'Stand with feet shoulder-width apart',
      'Lower your body by bending your knees and hips',
      'Go down until your thighs are parallel to the ground',
      'Push through your heels to return to standing'
    ],
    mainExercises: ['Bodyweight Squat'],
    accessoryExercises: ['Pistol Squat Progression', 'Jump Squats'],
    progression: {
      regression: 'Assisted Squat',
      current: 'Squat',
      progression: 'Pistol Squat',
      target: 'Shrimp Squat'
    }
  },

  // Core/Misc
  {
    id: 'l-sit',
    name: 'L-Sit',
    category: 'core-misc',
    difficulty: 'D',
    learningTime: '1-3 months',
    description: 'A static hold that builds incredible core and hip flexor strength.',
    musclesWorked: ['Core', 'Hip Flexors', 'Triceps', 'Shoulders'],
    highTensionAreas: ['Abs', 'Hip Flexors'],
    steps: [
      'Sit on parallel bars or the floor with legs extended',
      'Place your hands beside your hips and press down',
      'Lift your body off the ground by straightening your arms',
      'Keep your legs straight and held at 90 degrees'
    ],
    mainExercises: ['Tuck L-Sit', 'Full L-Sit'],
    accessoryExercises: ['L-Sit Holds', 'Compression Work'],
    progression: {
      regression: 'Foot-supported L-Sit',
      current: 'L-Sit',
      progression: 'V-Sit',
      target: 'Manna'
    }
  }
];

export const categoryLabels: Record<string, string> = {
  'horizontal-push': 'Horizontal Push',
  'vertical-push': 'Vertical Push',
  'horizontal-pull': 'Horizontal Pull',
  'vertical-pull': 'Vertical Pull',
  legs: 'Legs',
  'core-misc': 'Core / Misc'
};

export const categoryDescriptions: Record<string, string> = {
  'horizontal-push': 'Exercises where you push with your body parallel to the ground. These typically work the shoulders, arms, and chest.',
  'vertical-push': 'Exercises where you push with your body perpendicular to the ground (handstand position). These typically work the shoulders, triceps, and upper chest.',
  'horizontal-pull': 'Exercises where you pull with your body parallel to the ground. These typically work the lats, triceps, and rear deltoids.',
  'vertical-pull': 'Exercises where you pull with your body perpendicular to the ground. These typically target the latissimus dorsi, biceps, and rear deltoids.',
  legs: 'In calisthenics, leg exercises mainly consist of squats and their variations. These typically work the quadriceps, hamstrings, glutes, and calves.',
  'core-misc': 'Core strengthening exercises create the essential strength for body stability. These typically target the core muscles, including abs, obliques, and lower back.'
};
