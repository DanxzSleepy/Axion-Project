import { SkillPath } from '@/types';

export const getSkillPaths = (t: any): SkillPath[] => [
  {
    name: t.skillTree.pushPath,
    icon: '💪',
    skills: [
      { id: 'push-up', name: 'Push-up', requirement: 'None', xpReward: 100 },
      { id: 'diamond-push-up', name: 'Diamond Push-up', requirement: '10 Push-ups', prerequisiteId: 'push-up', xpReward: 100 },
      { id: 'pike-push-up', name: 'Pike Push-up', requirement: '20 Push-ups', prerequisiteId: 'diamond-push-up', xpReward: 100 },
      { id: 'handstand', name: 'Handstand', requirement: '15 Pike Push-ups', prerequisiteId: 'pike-push-up', xpReward: 150 },
      { id: 'hspu', name: 'Handstand Push-up', requirement: '30s Handstand Hold', prerequisiteId: 'handstand', xpReward: 200 },
      { id: 'planche-lean', name: 'Planche Lean', requirement: '10 Handstand Push-ups', prerequisiteId: 'hspu', xpReward: 150 },
      { id: 'tuck-planche', name: 'Tuck Planche', requirement: '30s Planche Lean', prerequisiteId: 'planche-lean', xpReward: 250 },
      { id: 'full-planche', name: 'Full Planche', requirement: '10s Tuck Planche', prerequisiteId: 'tuck-planche', xpReward: 500 }
    ]
  },
  {
    name: t.skillTree.pullPath,
    icon: '🏋️',
    skills: [
      { id: 'aus-pull-up', name: 'Australian Pull-up', requirement: 'None', xpReward: 100 },
      { id: 'pull-up', name: 'Pull-up', requirement: '15 Australian Pull-ups', prerequisiteId: 'aus-pull-up', xpReward: 100 },
      { id: 'chin-up', name: 'Chin-up', requirement: '10 Pull-ups', prerequisiteId: 'pull-up', xpReward: 100 },
      { id: 'muscle-up', name: 'Muscle-up', requirement: '15 Pull-ups + 10 Dips', prerequisiteId: 'pull-up', xpReward: 300 },
      { id: 'fl-tuck', name: 'Front Lever Tuck', requirement: '20 Pull-ups', prerequisiteId: 'pull-up', xpReward: 200 },
      { id: 'adv-fl', name: 'Advanced Front Lever', requirement: '15s Front Lever Tuck', prerequisiteId: 'fl-tuck', xpReward: 300 },
      { id: 'full-fl', name: 'Full Front Lever', requirement: '10s Adv. Front Lever', prerequisiteId: 'adv-fl', xpReward: 500 },
      { id: 'oapu', name: 'One-Arm Pull-up', requirement: '20 Pull-ups', prerequisiteId: 'pull-up', xpReward: 500 }
    ]
  },
  {
    name: t.skillTree.corePath,
    icon: '🎯',
    skills: [
      { id: 'plank', name: 'Plank', requirement: 'None', xpReward: 100 },
      { id: 'l-sit-prog', name: 'L-Sit Progression', requirement: '30s Plank', prerequisiteId: 'plank', xpReward: 100 },
      { id: 'tuck-l-sit', name: 'Tuck L-Sit', requirement: '15s L-Sit Progression', prerequisiteId: 'l-sit-prog', xpReward: 150 },
      { id: 'full-l-sit', name: 'Full L-Sit', requirement: '10s Tuck L-Sit', prerequisiteId: 'tuck-l-sit', xpReward: 200 },
      { id: 'v-sit', name: 'V-Sit', requirement: '15s Full L-Sit', prerequisiteId: 'full-l-sit', xpReward: 300 },
      { id: 'manna', name: 'Manna', requirement: '10s V-Sit', prerequisiteId: 'v-sit', xpReward: 500 }
    ]
  },
  {
    name: t.skillTree.legsPath,
    icon: '🦵',
    skills: [
      { id: 'squat', name: 'Squat', requirement: 'None', xpReward: 100 },
      { id: 'jump-squat', name: 'Jump Squat', requirement: '20 Squats', prerequisiteId: 'squat', xpReward: 100 },
      { id: 'pistol-prog', name: 'Pistol Squat Progression', requirement: '30 Squats', prerequisiteId: 'squat', xpReward: 150 },
      { id: 'assisted-pistol', name: 'Assisted Pistol Squat', requirement: '15 Jump Squats', prerequisiteId: 'jump-squat', xpReward: 200 },
      { id: 'pistol-squat', name: 'Pistol Squat', requirement: '10 Assisted Pistol Squats (each leg)', prerequisiteId: 'assisted-pistol', xpReward: 300 },
      { id: 'shrimp-squat', name: 'Shrimp Squat', requirement: '10 Pistol Squats (each leg)', prerequisiteId: 'pistol-squat', xpReward: 400 }
    ]
  }
];
