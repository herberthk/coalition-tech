import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

type TabType = "tab-1" | "tab-2";
type TabState = {
  activeTab: TabType;
  setActiveTab: (tab: TabType) => void;
};

export const useTabStore = create<TabState>()(
  devtools(
    persist(
      (set) => ({
        // initial state
        activeTab: "tab-1",
        // methods for manipulating state
        setActiveTab: (tab: TabType) => {
          set(() => ({
            activeTab: tab,
          }));
        },
      }),
      {
        name: "tabs",
        // storage: createJSONStorage(() => sessionStorage), // (optional) by default, 'localStorage' is used
      },
    ),
  ),
);
