import { createContext, useContext, useEffect, useMemo, useState } from "react";
import friendsData from "../data/friends.json";
import timelineSeed from "../data/timeline.json";

const AppContext = createContext(null);

const TIMELINE_STORAGE_KEY = "keenkeeper_timeline_entries";

export function AppProvider({ children }) {
  const [friends, setFriends] = useState([]);
  const [loading, setLoading] = useState(true);
  const [timelineEntries, setTimelineEntries] = useState([]);

  useEffect(() => {
    const fetchFriends = async () => {
      setLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 1200));
      setFriends(friendsData);
      setLoading(false);
    };

    fetchFriends();
  }, []);

  useEffect(() => {
    const saved = localStorage.getItem(TIMELINE_STORAGE_KEY);

    if (saved) {
      setTimelineEntries(JSON.parse(saved));
    } else {
      setTimelineEntries(timelineSeed);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(TIMELINE_STORAGE_KEY, JSON.stringify(timelineEntries));
  }, [timelineEntries]);

  const addTimelineEntry = (friend, type) => {
    const typeMap = {
      call: "Call",
      text: "Text",
      video: "Video",
    };

    const newEntry = {
      id: Date.now(),
      type,
      title: `${typeMap[type]} with ${friend.name}`,
      date: new Date().toISOString(),
      friendId: friend.id,
      friendName: friend.name,
    };

    setTimelineEntries((prev) => [newEntry, ...prev]);
  };

  const updateFriendGoal = (friendId, newGoal) => {
    setFriends((prev) =>
      prev.map((friend) =>
        friend.id === friendId ? { ...friend, goal: Number(newGoal) } : friend
      )
    );
  };

  const value = useMemo(
    () => ({
      friends,
      loading,
      timelineEntries,
      addTimelineEntry,
      updateFriendGoal,
    }),
    [friends, loading, timelineEntries]
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useAppContext() {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error("useAppContext must be used inside AppProvider");
  }

  return context;
}