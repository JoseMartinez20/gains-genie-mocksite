import { useState, useEffect } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db, auth } from "./firebase";

const UserManager = () => {
  const [userData, setUserData] = useState(null);
  const user = auth.currentUser;
  useEffect(() => {
    const fetchUserData = async () => {
      if (user) {
        const userRef = doc(db, "users", user.uid);
        try {
          const userDoc = await getDoc(userRef);
          if (userDoc.exists()) {
            setUserData(userDoc.data());
          }
        } catch (error) {
          console.error("Error fetching user data:", error);
        }
      }
    };

    fetchUserData();
  }, [user]);

  return userData;
};

export default UserManager;
