import { Divider } from '@nextui-org/react'
import React from 'react'
import { subtitle } from './primitives'

interface DevelopmentStage {
  title: string
  description: string
  year: string
}

interface CompanyDevelopmentStepperProps {
  stages: DevelopmentStage[]
  currentStage: number
}

export function TimetableStapper({ stages, currentStage }: CompanyDevelopmentStepperProps) {
  return (
    <ol className="relative border-s border-gray-200 dark:border-gray-700">
      {stages.map((stage, index) => (
        <li key={index} className="mb-8 ms-4">
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <time className="text-default-600">{stage.year}</time>
          <h3 className="text-default-500 ">{stage.title}</h3>
        </li>
      ))}
    </ol>
  )
}

