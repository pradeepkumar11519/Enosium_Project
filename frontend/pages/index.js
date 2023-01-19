import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import { useState } from 'react'
import axios from 'axios'

export default function Home() {
	const [data,setdata] = useState([])
	const onSubmit = async (e) =>{
		e.preventDefault()
		let new_data = []
		for(let i=0;i<Object.keys(e.target).length-3;i++){
			new_data.push(e.target[i]?.value)
		}
		setdata(new_data)
		await axios.post("http://127.0.0.1:8000/api/v1/Get_User_Input/",new_data).then((response)=>{
			console.log(response.data)
		})
	}
	console.log(data)
	return (
		<div>
			<form className='flex flex-col my-32 mx-32' onSubmit={onSubmit} >
				<label>Number of people who will provide maintenance</label>
				<input className='border-2 border-black my-5 p-3 font-bold' type="number" required />


				<label>Loan History</label>
				<select className='border-2 border-black my-5 p-3 font-bold' >
					{
						['all loans at this bank paid back duly', 'critical account/other loans existing (not at this bank)', 'delay in paying off loans in the past', 'existing loans paid back duly till now', 'no loans taken/allloans paid back duly'].map(ele=><option className='font-bold p-3'>{ele}</option>)
							
					}
					
				</select>

				<label>Purpose of taking loan</label>
				<select className='border-2 border-black my-5 p-3 font-bold'>
					{
						['Education Loan', 'Loan for business establishment', 'Loan for retraining', 'New Car Purchase', 'Old Car Repair', 'Other repairs', 'Purchase of domestic appliances', 'Purchase of furniture/equipment', 'Purchase of radio/television'].map(ele=><option className='font-bold p-3'>{ele}</option>)
					}
					
				</select>


				<label>loan amount taken</label>
				<input required className='border-2 border-black my-5 p-3 font-bold' type="number"  />	


				<label>Guarantor or Debtor</label>
				<select className='border-2 border-black my-5 p-3 font-bold'>
					{
						['co-applicant', 'gaurantor', 'none'].map(ele=><option className='font-bold p-3'>{ele}</option>)
					}
					
				</select>


				<label>Number of years of employment</label>
				<select className='border-2 border-black my-5 p-3 font-bold'>
					{
						['between 1 and 4 years', 'greater than 4 years', 'less than a year', 'unemployed'].map(ele=><option className='font-bold p-3'>{ele}</option>)
					}
					
				</select>


				<label>Marital Status</label>
				<select className='border-2 border-black my-5 p-3 font-bold'>
					{
						['female and divorced/seperated/married', 'male and divorced/seperated', 'male and married/widowed', 'male and single'].map(ele=><option className='font-bold p-3'>{ele}</option>)
					}
					
				</select>
				

				<label>Number of loans taken from current bank	</label>
				<input required className='border-2 border-black my-5 p-3 font-bold' type="number"  />
				

				<label>Age of the applicant in Number of Years	</label>
				<input required className='border-2 border-black my-5 p-3 font-bold' type="number"  />
				
				<label>amount in current accounts</label>
				<select className='border-2 border-black my-5 p-3 font-bold'>
					{
						['between 0 and 200', 'greater than 200', 'less than 0', 'no current account'].map(ele=><option className='font-bold p-3'>{ele}</option>)
					}
					
				</select>
				
				<label>amount in savings account</label>
				<select className='border-2 border-black my-5 p-3 font-bold'>
					{
						['between 100 and 500', 'between 500 and 1000', 'greater than 1000', 'less than 100', 'no savings account'].map(ele=><option className='font-bold p-3'>{ele}</option>)
					}
					
				</select>

				<label>% of income paid as installment</label>
				<input required className='border-2 border-black my-5 p-3 font-bold' type="number" />

				
				<label>Other loans plans taken</label>
				<select className='border-2 border-black my-5 p-3 font-bold'>
					{
						['bank', 'none', 'stores'].map(ele=><option className='font-bold p-3'>{ele}</option>)
					}
					
				</select>

				
				<label>Working abroad or not</label>
				<select className='border-2 border-black my-5 p-3 font-bold'>
					{
						['No', 'Yes'].map(ele=><option className='font-bold p-3'>{ele}</option>)
					}
					
				</select>

				
				<label>Is there telephone number available</label>
				<select className='border-2 border-black my-5 p-3 font-bold'>
					{
						['No', 'Yes'].map(ele=><option className='font-bold p-3'>{ele}</option>)
					}
					
				</select>

				<label>time duration for loan</label>
				<input required className='border-2 border-black my-5 p-3 font-bold' type="number"  />

				
				
				<label>Owned property	</label>
				<select className='border-2 border-black my-5 p-3 font-bold'>
					{
						['No property', 'Real Estate', 'building society savings agreement/life insurance', 'car or other property'].map(ele=><option className='font-bold p-3'>{ele}</option>)
					}
					
				</select>

				
				
				<label>Type of job performed</label>
				<select className='border-2 border-black my-5 break-all p-3 font-bold'>
					{
						['management/ self-employed/highly qualified employee/ officer', 'skilled employee / official', 'unemployed/ unskilled - non-resident', 'unskilled - resident'].map(ele=><option className='font-bold break-all p-3'>{ele}</option>)
					}
					
				</select>
				
				
				<label>Type of Housing</label>
				<select className='border-2 border-black my-5 break-all p-3 font-bold'>
					{
						['for free', 'own', 'rent'].map(ele=><option className='font-bold break-all p-3'>{ele}</option>)
					}
					
				</select>

				<label>Number of years of stay in current address	</label>
				<input required className='border-2 border-black my-5 p-3 font-bold' type="number" />				

				<button className='border-2 border-black p-3 font-bold w-fit rounded-md mx-auto'>Submit</button>
			</form>
		</div>
	)
}


