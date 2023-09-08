// React
import { useState } from 'react'

// This custom function returns an object with two properties: `activeTab` and `handleClick`.
// `activeTab` represents the index of the active tab.
// `handleClick` is a function used to change the value of `activeTab` when a tab is clicked.
export function useExperienceTabs (): { activeTab: number, handleClick: (tabNum: number) => void } {
  // We use React's `useState` hook to maintain a state called `activeTab` with an initial value of 0.
  const [activeTab, setActiveTab] = useState(0)

  // The `handleClick` function takes an argument `tabNum`, which is the index of the tab to activate.
  const handleClick = (tabNum: number): void => {
    // By calling `setActiveTab`, we update the value of `activeTab` with the value of `tabNum`,
    // which changes the active tab when a tab is clicked.
    setActiveTab(tabNum)
  }

  // We return an object containing `activeTab` and `handleClick` so they can be used
  // by the component that imports this custom function.
  return { activeTab, handleClick }
}
