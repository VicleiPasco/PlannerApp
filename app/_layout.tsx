import { Stack } from 'expo-router';
import { PlanProvider } from './plancontext';

export default function Layout() {
  return (
    <PlanProvider>
      <Stack />
    </PlanProvider>
  );
}
