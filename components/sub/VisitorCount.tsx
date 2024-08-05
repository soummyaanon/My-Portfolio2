'use client';

import React, { useEffect, useState } from 'react';
import { FaEye } from 'react-icons/fa';

const VisitorCount = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const fetchCount = async () => {
      try {
        const response = await fetch('/api/visitorCount', { method: 'POST' });
        if (!response.ok) {
          throw new Error('Failed to fetch visitor count');
        }
        const data = await response.json();
        setCount(data.count);
      } catch (error) {
        console.error('Error fetching visitor count:', error);
      }
    };

    fetchCount();
  }, []);

  return (
    <div className="flex items-center text-gray-300 text-sm">
      <FaEye size={16} className="mr-2" />
      <span>{count} visitors</span>
    </div>
  );
};

export default VisitorCount;