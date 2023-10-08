import { useState, useEffect } from 'react';

function useAgeCalculator(birthdateString) {
  const [age, setAge] = useState(0);

  useEffect(() => {
    // Parse the birthdate string into year, month, and day components
    const [day, month, year] = birthdateString.split('.').map(Number);

    const birthdate = new Date(year, month - 1, day); // Note: Months are 0-indexed in Date

    const currentDate = new Date();
    const yearsDiff = currentDate.getFullYear() - birthdate.getFullYear();
    
    // Adjust age if the birthdate hasn't occurred yet this year
    const birthdateThisYear = new Date(currentDate.getFullYear(), month - 1, day);
    if (currentDate < birthdateThisYear) {
      setAge(yearsDiff - 1);
    } else {
      setAge(yearsDiff);
    }
  }, [birthdateString]);

  return age;
}

export default useAgeCalculator;
