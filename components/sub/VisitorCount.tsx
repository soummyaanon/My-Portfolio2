'use client';

import React, { useEffect, useState, useCallback } from 'react';
import { FaEye } from 'react-icons/fa';

const VisitorCount = () => {
  const [count, setCount] = useState(0);

  const fetchCount = useCallback(async () => {
    try {
      const response = await fetch('/api/visitorCount', { method: 'POST' });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      if (typeof data.count === 'number') {
        setCount(data.count);
      } else {
        throw new Error('Invalid data format');
      }
    } catch (error) {
      console.error('Error fetching visitor count:', error);
    }
  }, []);

  useEffect(() => {
    fetchCount();
  }, [fetchCount]);

  return (
    <div className="flex items-center text-gray-300 text-sm">
      <FaEye size={16} className="mr-2" />
      <span>{count} visitors</span>
    </div>
  );
};

export default VisitorCount;
