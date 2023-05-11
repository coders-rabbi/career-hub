import React from 'react';
import { PieChart, Pie, Tooltip, Cell } from 'recharts';

const Statistic = () => {
    
    const data = [
        { name: "Assigment-1", value: 60 },
        { name: "Assigment-2", value: 60 },
        { name: "Assigment-3", value: 60 },
        { name: "Assigment-4", value: 60 },
        { name: "Assigment-5", value: 46 },
        { name: "Assigment-6", value: 43 },
        { name: "Assigment-7", value: 50 },
        { name: "Assigment-8", value: 58 },
        { name: "Assigment-9", value: 57 }
    ];
    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
            <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                {`${(percent * 820).toFixed(0)}%`}
            </text>
        );
    };


    return (
        <div className='flex justify-center items-center'>
            <PieChart width={1000} height={900}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={200}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
        </div>
    );
};

export default Statistic;