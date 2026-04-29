import { Exercise } from '@/types';

export const exercises: Exercise[] = [
  // Horizontal Push
  {
    id: 'pushup',
    name: 'Push-up',
    category: 'horizontal-push',
    difficulty: 'F',
    learningTime: '1-2 weeks',
    description: 'A fundamental bodyweight exercise that targets the chest, shoulders, and triceps. Master this before attempting advanced variations like [Diamond Push-up](/tutorials) or [Archer Push-up](/tutorials).',
    musclesWorked: ['Chest', 'Shoulders', 'Triceps', 'Core'],
    highTensionAreas: ['Pectorals', 'Anterior Deltoids'],
    steps: [
      'Start in a plank position with hands slightly wider than shoulder-width',
      'Lower your body until your chest nearly touches the floor',
      'Push yourself back up to the starting position',
      'Keep your core engaged throughout the movement'
    ],
    executionTips: [
      'Keep your body in a straight line from head to heels',
      'Engage your core and squeeze your glutes',
      'Lower with control - don\'t just drop down',
      'Full range of motion: chest to floor'
    ],
    commonMistakes: [
      'Sagging hips or piking hips too high',
      'Half reps - not going deep enough',
      'Flaring elbows out at 90 degrees (keep at 45°)',
      'Head drooping down or craning up'
    ],
    prerequisites: ['Basic core strength', 'Plank hold for 30 seconds'],
    mainExercises: ['Incline Push-up', 'Standard Push-up'],
    accessoryExercises: ['Diamond Push-up', 'Wide Push-up'],
    techniqueVideoUrl: 'https://www.youtube.com/watch?v=IODxDxX7oi4',
    progressionVideoUrl: 'https://www.youtube.com/watch?v=X0SHe8mO9vM',
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
    techniqueVideoUrl: 'https://www.youtube.com/watch?v=lIZ_C4VJnmc',
    progressionVideoUrl: 'https://www.youtube.com/watch?v=fXgou2W10ok',
    progression: {
      regression: 'Push-up',
      current: 'Pike Push-up',
      progression: 'Handstand Push-up',
      target: '90° Push-up'
    }
  },
  {
    id: 'dips',
    name: 'Dips',
    category: 'horizontal-push',
    difficulty: 'D',
    learningTime: '2-4 weeks',
    description: 'A powerful compound movement for the triceps, chest, and front deltoids. Dips are a key prerequisite for muscle-ups.',
    musclesWorked: ['Triceps', 'Chest', 'Shoulders'],
    highTensionAreas: ['Triceps', 'Lower Pectorals'],
    steps: [
      'Mount the parallel bars with arms locked',
      'Lower your body by bending your elbows until they are at 90 degrees',
      'Lean slightly forward to engage the chest',
      'Push back up to the starting position'
    ],
    executionTips: [
      'Keep your core tight and legs together',
      'Don\'t flare your elbows excessively',
      'Control the descent',
      'Full lockout at the top'
    ],
    commonMistakes: [
      'Not going deep enough',
      'Shoulders shrugging (keep them depressed)',
      'Excessive swinging',
      'Locking elbows too aggressively'
    ],
    prerequisites: ['10-15 solid push-ups'],
    mainExercises: ['Parallel Bar Dips'],
    accessoryExercises: ['Bench Dips', 'Straight Bar Dips'],
    techniqueVideoUrl: 'https://www.youtube.com/watch?v=2IUoEAzjZqY',
    progressionVideoUrl: 'https://www.youtube.com/watch?v=nHRrW_JSru8',
    progression: {
      regression: 'Bench Dips',
      current: 'Dips',
      progression: 'Weighted Dips',
      target: 'Muscle-up'
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
    techniqueVideoUrl: 'https://www.youtube.com/watch?v=Y3FSeSecjKA',
    progressionVideoUrl: 'https://www.youtube.com/watch?v=oZ_pL0_pE6o',
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
    techniqueVideoUrl: 'https://www.youtube.com/watch?v=eGo4IYlbE5g',
    progressionVideoUrl: 'https://www.youtube.com/watch?v=HrJOaochoEU',
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
    techniqueVideoUrl: 'https://www.youtube.com/watch?v=eGo4IYlbE5g',
    progressionVideoUrl: 'https://www.youtube.com/watch?v=3YvfRx31xDE',
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
    techniqueVideoUrl: 'https://www.youtube.com/watch?v=ZI3gB5irv5g',
    progressionVideoUrl: 'https://www.youtube.com/watch?v=ZI3gB5irv5g',
    progression: {
      regression: 'Assisted Squat',
      current: 'Squat',
      progression: 'Pistol Squat',
      target: 'Shrimp Squat'
    }
  },

  // Core/Misc
  {
    id: 'hollow-body-hold',
    name: 'Hollow Body Hold',
    category: 'core-misc',
    difficulty: 'F',
    learningTime: '1-2 weeks',
    description: 'The most fundamental core position in calisthenics and gymnastics. Teaches you to engage your core and protect your lower back.',
    musclesWorked: ['Abs', 'Hip Flexors', 'Obliques'],
    highTensionAreas: ['Rectus Abdominis'],
    steps: [
      'Lie flat on your back',
      'Press your lower back into the floor (no gap)',
      'Lift your legs and shoulders off the ground',
      'Reach your arms overhead (or by your sides for easier version)'
    ],
    executionTips: [
      'Lower back MUST remain flat against the floor',
      'Point your toes',
      'Keep your chin tucked slightly',
      'Squeeze your glutes'
    ],
    mainExercises: ['Hollow Body Hold'],
    accessoryExercises: ['Hollow Rocks', 'Dead Bugs'],
    progression: {
      regression: 'Bent-knee Hollow Hold',
      current: 'Hollow Body Hold',
      progression: 'L-Sit',
      target: 'Planche'
    }
  },
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
    techniqueVideoUrl: 'https://www.youtube.com/watch?v=cu0fHp8HCDo',
    progressionVideoUrl: 'https://www.youtube.com/watch?v=BbAkWxDZKIM',
    progression: {
      regression: 'Foot-supported L-Sit',
      current: 'L-Sit',
      progression: 'V-Sit',
      target: 'Manna'
    }
  },

  // Additional Horizontal Push
  {
    id: 'diamond-pushup',
    name: 'Diamond Push-up',
    category: 'horizontal-push',
    difficulty: 'C',
    learningTime: '1-2 months',
    description: 'A push-up variation with hands close together, emphasizing triceps strength.',
    musclesWorked: ['Triceps', 'Chest', 'Shoulders'],
    highTensionAreas: ['Triceps', 'Inner Chest'],
    steps: ['Place hands close together forming a diamond shape', 'Lower your chest to your hands', 'Push back up maintaining tight core', 'Keep elbows close to your body'],
    mainExercises: ['Diamond Push-up'],
    accessoryExercises: ['Close-grip Push-up'],
    techniqueVideoUrl: 'https://www.youtube.com/watch?v=IODxDxX7oi4',
    progressionVideoUrl: 'https://www.youtube.com/watch?v=FU_5LPjtjus',
    progression: { regression: 'Standard Push-up', current: 'Diamond Push-up', progression: 'Archer Push-up', target: 'One-Arm Push-up' }
  },
  {
    id: 'archer-pushup',
    name: 'Archer Push-up',
    category: 'horizontal-push',
    difficulty: 'B',
    learningTime: '3-6 months',
    description: 'An advanced push-up that shifts weight to one arm, building toward one-arm push-ups.',
    musclesWorked: ['Chest', 'Shoulders', 'Triceps', 'Core'],
    highTensionAreas: ['Pectorals', 'Anterior Deltoids'],
    steps: ['Start in wide push-up position', 'Lower to one side while keeping other arm straight', 'Push back up', 'Alternate sides'],
    mainExercises: ['Archer Push-up'],
    accessoryExercises: ['Typewriter Push-up'],
    progression: { regression: 'Diamond Push-up', current: 'Archer Push-up', progression: 'One-Arm Push-up Progression', target: 'One-Arm Push-up' }
  },
  {
    id: 'planche-lean',
    name: 'Planche Lean',
    category: 'horizontal-push',
    difficulty: 'B',
    learningTime: '3-6 months',
    description: 'A foundational planche exercise that builds straight-arm strength.',
    musclesWorked: ['Shoulders', 'Chest', 'Biceps', 'Core'],
    highTensionAreas: ['Anterior Deltoids', 'Biceps Tendons'],
    steps: ['Start in push-up position', 'Lean forward past your wrists', 'Keep arms straight and body tight', 'Hold the position'],
    mainExercises: ['Planche Lean'],
    accessoryExercises: ['Lean Holds', 'Pseudo Planche Push-ups'],
    progression: { regression: 'Push-up', current: 'Planche Lean', progression: 'Tuck Planche', target: 'Full Planche' }
  },

  // Additional Vertical Push
  {
    id: 'handstand-pushup',
    name: 'Handstand Push-up',
    category: 'vertical-push',
    difficulty: 'B',
    learningTime: '6-12 months',
    description: 'An advanced vertical pushing exercise performed in a handstand position.',
    musclesWorked: ['Shoulders', 'Triceps', 'Upper Chest', 'Core'],
    highTensionAreas: ['Anterior Deltoids', 'Triceps'],
    steps: ['Kick up to handstand against wall', 'Lower your head to the ground', 'Press back up to full handstand', 'Keep body tight throughout'],
    mainExercises: ['Wall Handstand Push-up'],
    accessoryExercises: ['Pike Push-up', 'Elevated Pike Push-up'],
    progression: { regression: 'Pike Push-up', current: 'Handstand Push-up', progression: 'Freestanding HSPU', target: '90° Push-up' }
  },

  // Additional Vertical Pull
  {
    id: 'chinup',
    name: 'Chin-up',
    category: 'vertical-pull',
    difficulty: 'D',
    learningTime: '1-3 months',
    description: 'A vertical pulling exercise with an underhand grip, emphasizing biceps.',
    musclesWorked: ['Back', 'Biceps', 'Rear Deltoids'],
    highTensionAreas: ['Latissimus Dorsi', 'Biceps'],
    steps: ['Hang from bar with underhand grip', 'Pull your chin over the bar', 'Lower with control', 'Keep core engaged'],
    mainExercises: ['Chin-up'],
    accessoryExercises: ['Commando Pull-up'],
    progression: { regression: 'Band-assisted Chin-up', current: 'Chin-up', progression: 'Muscle-up', target: 'One-Arm Chin-up' }
  },
  {
    id: 'muscleup',
    name: 'Muscle-up',
    category: 'vertical-pull',
    difficulty: 'B',
    learningTime: '6-12 months',
    description: 'An explosive movement combining a pull-up with a dip transition over the bar.',
    musclesWorked: ['Back', 'Chest', 'Triceps', 'Biceps', 'Core'],
    highTensionAreas: ['Latissimus Dorsi', 'Pectorals'],
    steps: ['Explosive pull-up to chest height', 'Transition over the bar', 'Press out to dip position', 'Lower with control'],
    mainExercises: ['Bar Muscle-up', 'Ring Muscle-up'],
    accessoryExercises: ['Explosive Pull-ups', 'False Grip Hangs'],
    techniqueVideoUrl: 'https://www.youtube.com/watch?v=2T_5m3E_FfI',
    progressionVideoUrl: 'https://www.youtube.com/watch?v=yYf6_t77h3w',
    progression: { regression: 'Jumping Muscle-up', current: 'Muscle-up', progression: '360 Muscle-up', target: 'One-Arm Muscle-up' }
  },
  {
    id: 'one-arm-pullup',
    name: 'One-Arm Pull-up',
    category: 'vertical-pull',
    difficulty: 'A',
    learningTime: '1-2 years',
    description: 'An elite pulling exercise performed with only one arm.',
    musclesWorked: ['Back', 'Biceps', 'Forearms', 'Core'],
    highTensionAreas: ['Latissimus Dorsi', 'Biceps'],
    steps: ['Hang from bar with one hand', 'Pull your chin over the bar', 'Lower with control', 'Keep body tight to prevent rotation'],
    mainExercises: ['One-Arm Pull-up'],
    accessoryExercises: ['Archer Pull-ups', 'Typewriter Pull-ups'],
    progression: { regression: 'Archer Pull-up', current: 'One-Arm Pull-up', progression: 'One-Arm Muscle-up', target: 'One-Arm One-Leg Pull-up' }
  },

  // Additional Legs
  {
    id: 'pistol-squat',
    name: 'Pistol Squat',
    category: 'legs',
    difficulty: 'B',
    learningTime: '3-9 months',
    description: 'A single-leg squat that requires strength, balance, and mobility.',
    musclesWorked: ['Quadriceps', 'Glutes', 'Hamstrings', 'Core'],
    highTensionAreas: ['Quadriceps', 'Hip Flexors'],
    steps: ['Stand on one leg with other leg extended', 'Squat down on one leg', 'Keep extended leg off the ground', 'Stand back up'],
    mainExercises: ['Assisted Pistol Squat', 'Full Pistol Squat'],
    accessoryExercises: ['Bulgarian Split Squat', 'Shrimp Squat'],
    progression: { regression: 'Assisted Pistol Squat', current: 'Pistol Squat', progression: 'Weighted Pistol Squat', target: 'Pistol Squat Jump' }
  },
  {
    id: 'shrimp-squat',
    name: 'Shrimp Squat',
    category: 'legs',
    difficulty: 'B',
    learningTime: '3-9 months',
    description: 'A single-leg squat variation that emphasizes knee flexion.',
    musclesWorked: ['Quadriceps', 'Glutes', 'Hamstrings'],
    highTensionAreas: ['Quadriceps', 'Glutes'],
    steps: ['Stand on one leg, hold other foot behind you', 'Squat down until knee nearly touches ground', 'Push back up', 'Keep balance throughout'],
    mainExercises: ['Shrimp Squat'],
    accessoryExercises: ['Assisted Shrimp Squat'],
    progression: { regression: 'Assisted Shrimp Squat', current: 'Shrimp Squat', progression: 'Weighted Shrimp Squat', target: 'Shrimp Squat Jump' }
  },
  {
    id: 'nordic-curl',
    name: 'Nordic Curl',
    category: 'legs',
    difficulty: 'A',
    learningTime: '6-12 months',
    description: 'An advanced hamstring exercise that involves controlled lowering from kneeling position.',
    musclesWorked: ['Hamstrings', 'Glutes', 'Calves'],
    highTensionAreas: ['Hamstrings'],
    steps: ['Kneel with ankles secured', 'Slowly lower your torso forward', 'Control the descent as long as possible', 'Use hands to push back up'],
    mainExercises: ['Nordic Curl Negatives', 'Full Nordic Curl'],
    accessoryExercises: ['Glute-ham Raises', 'Single-leg Romanian Deadlift'],
    progression: { regression: 'Nordic Curl Negatives', current: 'Nordic Curl', progression: 'Weighted Nordic Curl', target: 'Nordic Curl to Stand' }
  },

  // Additional Core/Misc
  {
    id: 'dragon-flag',
    name: 'Dragon Flag',
    category: 'core-misc',
    difficulty: 'A',
    learningTime: '6-12 months',
    description: 'An advanced core exercise made famous by Bruce Lee.',
    musclesWorked: ['Core', 'Lats', 'Hip Flexors', 'Lower Back'],
    highTensionAreas: ['Rectus Abdominis', 'Obliques'],
    steps: ['Lie on bench and grip behind your head', 'Raise your entire body up', 'Lower slowly keeping body straight', 'Only shoulders touch the bench'],
    mainExercises: ['Dragon Flag Negatives', 'Dragon Flag'],
    accessoryExercises: ['L-sit', 'Hanging Leg Raises'],
    progression: { regression: 'Tuck Dragon Flag', current: 'Dragon Flag', progression: 'One-Arm Dragon Flag', target: 'Dragon Flag to Handstand' }
  },
  {
    id: 'front-lever',
    name: 'Front Lever',
    category: 'core-misc',
    difficulty: 'A',
    learningTime: '1-2 years',
    description: 'An advanced static hold where you hold your body horizontal while hanging from a bar.',
    musclesWorked: ['Back', 'Core', 'Biceps', 'Rear Deltoids'],
    highTensionAreas: ['Latissimus Dorsi', 'Core'],
    steps: ['Hang from bar with overhand grip', 'Pull your body horizontal', 'Keep body straight and tight', 'Hold the position'],
    mainExercises: ['Tuck Front Lever', 'Advanced Tuck FL', 'Full Front Lever'],
    accessoryExercises: ['Front Lever Raises', 'Tuck FL Pull-ups'],
    progression: { regression: 'Tuck Front Lever', current: 'Front Lever', progression: 'Front Lever Pull-up', target: 'One-Arm Front Lever' }
  },
  {
    id: 'planche',
    name: 'Planche',
    category: 'core-misc',
    difficulty: 'S',
    learningTime: '1-3 years',
    description: 'An elite static hold where you hold your body parallel to the ground supported only by your hands.',
    musclesWorked: ['Shoulders', 'Chest', 'Biceps', 'Core'],
    highTensionAreas: ['Anterior Deltoids', 'Biceps Tendons'],
    steps: ['Start in tuck planche position', 'Slowly extend legs', 'Keep arms straight and body tight', 'Hold horizontal position'],
    mainExercises: ['Tuck Planche', 'Advanced Tuck PL', 'Straddle PL', 'Full Planche'],
    accessoryExercises: ['Planche Lean', 'Pseudo Planche Push-ups'],
    techniqueVideoUrl: 'https://www.youtube.com/watch?v=vV_X49Y-f9g',
    progressionVideoUrl: 'https://www.youtube.com/watch?v=gT-Wp77qRoc',
    progression: { regression: 'Planche Lean', current: 'Planche', progression: 'Planche Push-up', target: 'One-Arm Planche' }
  },
  {
    id: 'bulgarian-split-squat',
    name: 'Bulgarian Split Squat',
    category: 'legs',
    difficulty: 'D',
    learningTime: '1-2 weeks',
    description: 'A superior single-leg exercise that builds massive leg strength and improves balance.',
    musclesWorked: ['Quadriceps', 'Glutes', 'Hamstrings'],
    highTensionAreas: ['Quadriceps'],
    steps: [
      'Place one foot behind you on an elevated surface',
      'Lower your hips until your front thigh is parallel to the ground',
      'Keep your front knee aligned with your foot',
      'Push back up through your front heel'
    ],
    executionTips: [
      'Keep your torso upright for more quad focus',
      'Lean forward slightly for more glute focus',
      'Maintain a stable core',
      'Control the eccentric phase'
    ],
    mainExercises: ['Bulgarian Split Squat'],
    accessoryExercises: ['Lunges', 'Step-ups'],
    progression: {
      regression: 'Lunges',
      current: 'Bulgarian Split Squat',
      progression: 'Pistol Squat',
      target: 'Shrimp Squat'
    }
  },
  {
    id: 'side-plank',
    name: 'Side Plank',
    category: 'core-misc',
    difficulty: 'F',
    learningTime: '1 week',
    description: 'Builds lateral core stability and strengthens the obliques.',
    musclesWorked: ['Obliques', 'Abs', 'Shoulders'],
    highTensionAreas: ['Internal and External Obliques'],
    steps: [
      'Lie on your side with your elbow directly under your shoulder',
      'Lift your hips off the ground',
      'Keep your body in a straight line',
      'Hold the position'
    ],
    mainExercises: ['Side Plank'],
    accessoryExercises: ['Side Plank Pulses', 'Side Plank with Leg Lift'],
    progression: {
      regression: 'Knee Side Plank',
      current: 'Side Plank',
      progression: 'Side Plank with Leg Lift',
      target: 'Human Flag'
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
