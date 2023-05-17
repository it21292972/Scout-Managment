import React from 'react'
import BadgeIssueOrderForm from './../../components/BadgeIssueOrder'
import Navbarbadgeexaminer from './../../components/Navbarbadgeexaminer'
import './badgeExaminerBIR.scss'

const BadgeExaminerBIR = () => {
  return (
    <div className='BadgeExaminerBIR'>
      <div><Navbarbadgeexaminer/></div>
      <h1>Fill the following fields</h1>
      <BadgeIssueOrderForm/>
    </div>
  )
}

export default BadgeExaminerBIR
