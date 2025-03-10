import { Card } from '@/components/ui/card'
import { createFileRoute } from '@tanstack/react-router'
import img from '../pku-calc.png'
export const Route = createFileRoute('/about')({
  component: RouteComponent,
})

function RouteComponent() {
  return (<>
  
  <div className="container mx-auto max-w-3xl border-green-500  border-3   bg-white rounded-lg p-4 flex flex-col gap-2">
    <h2 className='text-3xl font-semi-bold'>What is phenylketonuria (PKU)?
    </h2>
    <p className='text-[#6c757d] text-lg'>PKU is a rare metabolic disorder which prevents the normal breakdown and use of protein containing foods by the body. It is due to a deficiency of an enzyme (phenylalanine hydroxylase or PAH) which breaks down protein</p>
    <p className='text-[#6c757d] text-lg'>
Protein is made up of amino acids. One of these amino acids is called phenylalanine and would normally be changed into another amino acid – tyrosine. However, in PKU because the enzyme is not very active, or is missing, the phenylalanine is unable to be converted into tyrosine and will accumulate in the blood. If left untreated the build-up of phenylalanine can damage the brain and cause severe learning difficulties. Fortunately, many countries have anewborn screening programme for PKU. This means that PKU is detected in the first few days of life and treatment can start as soon as diagnosis is confirmed.
</p>
<h2 className='text-3xl font-semi-bold'>What is a low phenylalanine diet?</h2>
<p className='text-[#6c757d] text-lg'>
A low phenylalanine diet is the main treatment for phenylketonuria (PKU). People with PKU must restrict phenylalanine which is found in protein. However, phenylalanine (protein) cannot be removed completely, so it is given in measured exchange amounts each day.
There are 4 parts to a low phenylalanine diet:
</p>
<ul className='list-decimal pl-4 text-[#6c757d] text-lg'>
  <li><span className='text-red-700'>Foods high in protein</span> which should be avoided – <span className='text-red-700'>Red list</span>.</li>
  <li><span className='text-yellow-300'>Exchange foods; </span>these foods need to be weighed before eating – <span className='text-yellow-300'>Amber list.</span></li>
  <li><span className='text-green-300'> Exchange-free foods;</span> these can be eaten freely, without weighing – <span className='text-green-300'> Green list.</span>s Exchange-free foods include fruits, some vegetables and low protein prescribable foods such as bread or pasta. Low protein prescribable foods are an important part of the diet.</li>
<li>Protein substitute. This provides safe protein without phenylalanine. It is taken in 3 or 4 doses spread evenly throughout the day. It usually includes vitamins and minerals. Protein substitutes are prescribed on an individual basis, so are not discussed on this app.</li>

</ul>
<h2 className='text-3xl font-semi-bold'>What is a protein (PKU) exchange?</h2>
<p className='text-[#6c757d] text-lg'>A measured amount of phenylalanine is called an exchange or a PKU exchange. One exchange is the amount of food that contains 1g of protein or 50mg phenylalanine.
For most foods the protein content displayed on the nutrition label is used to calculate the amount of food that is equal to one exchange. Fruits and vegetables are an exception. The NSPKU have analysed the phenylalanine content of a wide range of fruits and vegetables in order to calculate their exchange amounts. Exchange fruits and vegetables have an orange/amber spot in the app.</p>

<h2 className='text-3xl font-semi-bold'>Examples of exhange foods</h2>
<p className='text-[#6c757d] text-lg'>14g Kellogg’s cornflakes = 1 exchange<br/>
80g boiled potato = 1 exchange</p>
<h2 className='text-3xl font-semi-bold'>How is the daily number of phenylalanine exchages allocated?</h2>
<p className='text-[#6c757d] text-lg'>The number of exchanges is determined mainly by blood phenylalanine levels. Too many exchanges will cause high phenylalanine levels. Too few exchanges will cause low blood phenylalanine levels. There will also be an insufficient supply of protein or phenylalanine for growth, or for repair and maintenance of the body. The amount of exchanges allocated to each person with PKU is individual.</p>
<h2 className='text-3xl font-semi-bold'>
   How to calculate protein exchanges  
   </h2>
   <p className='text-[#6c757d] text-lg'>To work out a 1g protein exchange from a food label, do the following calculation:</p>
   <p className='text-[#6c757d] text-lg'>100 ÷ the amount of protein in 100g = 1 exchange</p>
   
   <h2 className='text-xl font-semi-bold'>FOR EXAMPLE</h2>
   <p className='text-[#6c757d] text-lg'>Rice Krispies contain 7g of protein in 100g</p>
   <p className='text-[#6c757d] text-lg'>100 ÷ 7 = 14.3</p>
   <p className='text-[#6c757d] text-lg'>Therefore, 14g of Rice Krispies = 1 exchange</p>
   <p className='text-[#6c757d] text-lg'>Calculating protein exchanges can be confusing. If you are unsure how to do this, please speak to your dietitian.</p>
   <p className='text-[#6c757d] text-lg'>The following ‘PKU Exchange Ready Reckoner’ produced by the NSPKU may help.</p>
   <img src={img} />
    </div>
  
  </>)
}
