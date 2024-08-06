import React, { createContext, useState, ReactNode, useContext } from 'react';

type Plan = {
  id: string;
  title: string;
  description: string;
  date: string;
};

interface PlanContextType {
  plans: Plan[];
  addPlan: (plan: Plan) => void;
  removePlan: (id: string) => void;
}

const PlanContext = createContext<PlanContextType | undefined>(undefined);

export const PlanProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [plans, setPlans] = useState<Plan[]>([]);

  const addPlan = (plan: Plan) => {
    setPlans(prevPlans => [...prevPlans, plan]);
  };

  const removePlan = (id: string) => {
    setPlans(prevPlans => prevPlans.filter(plan => plan.id !== id));
  };

  return (
    <PlanContext.Provider value={{ plans, addPlan, removePlan }}>
      {children}
    </PlanContext.Provider>
  );
};

export const usePlans = () => {
  const context = useContext(PlanContext);
  if (context === undefined) {
    throw new Error('usePlans must be used within a PlanProvider');
  }
  return context;
};
