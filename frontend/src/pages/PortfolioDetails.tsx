import React from 'react'
import { useEffect } from 'react'
// import holdeedLogo from '@/assets/holdeed Logo.png'
import holdeedAward from '@/assets/Holdeed award.png'
// import holdeedStats from '@/assets/Holdeed stats.png'
// import holdeedProjectOverview from '@/assets/Holdeed project overview.png'
// import solutionDevelopment from '@/assets/Solution development.png'
// import challengeImage from '@/assets/challenge image.png'
// import solutionImage from '@/assets/solution image.png'
import { useGetPortfolioDetailQuery, useGetPortfolioFeatureQuery } from '@/api/portfolioDetailsApi'
import { useGetTechnologyStacksByPortfolioIdQuery } from '@/api/technologyStackApi'
import { useParams } from 'react-router-dom'



const PortfolioDetails = () => {
   const { id } = useParams();
  const { data: portfolioDetail, error, isLoading} = useGetPortfolioDetailQuery(id);

  const {data: technologyStacks} = useGetTechnologyStacksByPortfolioIdQuery(id);

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top when component mounts
  }, []);



//  filter frontend stacks
const frontendStacks = technologyStacks?.filter((stack) => stack.type === 'frontend technologies');

// filter backend stacks
const backendStacks = technologyStacks?.filter((stack) => stack.type === 'backend');

// filter mobile stacks
  const mobileStacks = technologyStacks?.filter((stack) => stack.type === 'mobile development');

  // filter server stacks
  const serverStacks = technologyStacks?.filter((stack) => stack.type === 'server architecture');

  // filter database stacks
  const databaseStacks = technologyStacks?.filter((stack) => stack.type === 'database'); 

  // filter optional stack components
  const optionalStacks = technologyStacks?.filter((stack) => stack.type === 'optional stack components');

  // filter cache memory stacks
  const cacheMemoryStacks = technologyStacks?.filter((stack) => stack.type === 'cache memory');


  
   
  return (
    <div className='mx-10 lg:mx-20'>
        <img className=' mt-20' src={`${import.meta.env.VITE_API_URL}/api/img/${portfolioDetail?.logo}`} alt="" />
        <div className='flex justify-between mt-5'>
        <div className='text-2xl lg:text-4xl text-wrap inter' dangerouslySetInnerHTML={{ __html: portfolioDetail?.introduction }} />
        {/* <img className='h-40' src={holdeedAward} alt="" /> */}
        </div>
      
      {/* Hero image here */}
        <img className='w-full mt-10 mb-10 object-contain' src={`${import.meta.env.VITE_API_URL}/api/img/${portfolioDetail?.heroImage}`} alt="" />

        {/* Project overview here */}
        <div className='text-center mb-20'>
            <h2 className='text-2xl lg:text-[48px] mb-5'>{portfolioDetail?.projectOverviewHeading}</h2>
            <div className='text-[#98989A] mb-10' dangerouslySetInnerHTML={{ __html: portfolioDetail?.projectOverviewDescription }} />

            <img className='mx-auto' src={`${import.meta.env.VITE_API_URL}/api/img/${portfolioDetail?.projectOverviewImage}`} alt="" />
        </div>

        {/* challenge and solution section */}
        <div className="flex flex-col lg:flex-row text-white gap-8 border border-[#282828] mb-20">
      {/* Challenge Section */}
      <div className="flex-1 flex flex-col items-start bg-[#282828] p-6 shadow-lg">
        <div className="flex items-center gap-1 lg:gap-4 mb-4">
          {/* Icon */}
          <div className="">
           <img className='w-2/3 lg:w-15' src={`${import.meta.env.VITE_API_URL}/api/img/${portfolioDetail?.challengeIconImage}`} alt="" />
          </div>
          {/* Title */}
          <h3 className="text-lg lg:text-2xl font-bold">{portfolioDetail?.challengeHeading}</h3>
        </div>
        {/* Description */}
       <div className='text-[#98989A]' dangerouslySetInnerHTML={{ __html: portfolioDetail?.challengeDescription }} />
       
      </div>

      {/* Solution Section */}
      <div className="flex-1 flex flex-col items-start p-6 shadow-lg">
        <div className="flex items-center gap-1 lg:gap-4 mb-4">
          {/* Icon */}
          <div className="">
            <img className='w-2/3 lg:w-15' src={`${import.meta.env.VITE_API_URL}/api/img/${portfolioDetail?.solutionIconImage}`} />
          </div>
          {/* Title */}
          <h3 className="text-lg lg:text-2xl font-bold">{portfolioDetail?.solutionHeading}</h3>
        </div>
        {/* Description */}
        <div className='text-[#98989A]' dangerouslySetInnerHTML={{ __html: portfolioDetail?.solutionDescription }} />
      </div>
    </div>

        {/* Solution development */}
        <div className='text-center'>
            <p className='text-primary text-2xl lg:text-[36px] mb-3'>Solution Development</p>
            <div className='text-[#98989A]' dangerouslySetInnerHTML={{ __html: portfolioDetail?.solutionDevelopmentDescription }} />
            <div className='mt-20'>
            <img className='w-[700px] object-contain mx-auto' src={`${import.meta.env.VITE_API_URL}/api/img/${portfolioDetail?.solutionImage}`} />
            </div>
        </div>

        {/* Key features */}
        <div className='mt-20'>
        <h2 className="text-center mb-10 text-3xl lg:text-[36px]">{portfolioDetail?.keyFeaturesHeading}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
        {portfolioDetail?.features.map((feature, index) => (
            <div
                key={index}
                className={`p-6 text-white ${
                    index % 3 === 0 ? 'md:col-span-2 bg-[#282828]' : 'md:col-span-1 border-2 border-[#282828]'
                }`}
            >
                <h3 className="text-lg lg:text-xl lg:font-bold mb-2">{feature.title}</h3>
                <p className="text-xl lg:text-sm text-[#98989A]">{feature.description}</p>
            </div>
        ))}
    </div>
      </div>


        {/* Conclusion */}
        <div className='mb-20 text-center lg:text-left'>
            <h2 className='text-3xl lg:text-[38px] mb-2 lg:mb-3'>{portfolioDetail?.conclusionHeading}</h2>
            <div className='text-[#98989A] text-xl' dangerouslySetInnerHTML={{ __html: portfolioDetail?.conclusionDescription }} />
        </div>


        {/* Technology Stack */}
      <div className="text-white mb-5 lg:border border-[#272727] text-center lg:text-left">
        <h1 className="text-4xl font-light mb-12">Technology Stack</h1>

        {/* First Row */}
        <div className="grid md:grid-cols-3 gap-8 px-2 place-items-center lg:place-items-start">
          {/* Frontend Technologies */}
          {frontendStacks?.length > 0 && (
            <div className="space-y-4 border-b md:border-b-0 w-full pb-5 lg:pb-0 lg:border-0 lg:border-e border-[#272727] lg:pe-20">
              <h2 className="text-xl text-[#98989A] mb-6">Front-End Technologies</h2>
              <div className="flex gap-8 items-center">
                {frontendStacks.map(stack => (
                  <img
                    key={stack.id}
                    src={`${import.meta.env.VITE_API_URL}/api/img/${stack.technologyImage}`}
                    alt={stack.type}
                    className="h-12 w-12 object-contain"
                  />
                ))}
              </div>
            </div>
          )}

          {/* Server Architecture  */}
          {serverStacks?.length > 0 && (
            <div className="space-y-4 border-b md:border-b-0 w-full pb-5 lg:pb-0 lg:border-0 lg:border-e border-[#272727] lg:pe-20">
              <h2 className="text-xl text-[#98989A] mb-6">Server Architecture</h2>
              <div className="flex gap-8 items-center">
                {serverStacks.map(stack => (
                  <img
                    key={stack.id}
                    src={`${import.meta.env.VITE_API_URL}/api/img/${stack.technologyImage}`}
                    alt={stack.type}
                    className="h-12 w-12 object-contain"
                  />
                ))}
              </div>
            </div>
          )}

          {/* Optional Stack Components */}
          {optionalStacks?.length > 0 && (
            <div className="space-y-4">
              <h2 className="text-xl text-[#98989A] mb-6">Optional Stack Components</h2>
              <div className="flex gap-8 justify-center">
                {optionalStacks.map(stack => (
                  <img
                    key={stack.id}
                    src={`${import.meta.env.VITE_API_URL}/api/img/${stack.technologyImage}`}
                    alt={stack.type}
                    className="h-12 w-12 object-contain"
                  />
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Second Row */}
        <div className="grid md:grid-cols-3 gap-8 mt-10 border-t border-[#272727] py-10 px-2 place-items-center lg:place-items-start">
          {/* Backend Technologies */}
          {backendStacks?.length > 0 && (
            <div className="space-y-4 border-b md:border-b-0 w-full pb-5 lg:pb-0 lg:border-0 lg:border-e border-[#272727] lg:pe-20">
              <h2 className="text-xl text-[#98989A] mb-6">Backend</h2>
              <div className="flex gap-8 items-center">
                {backendStacks.map(stack => (
                  <img
                    key={stack.id}
                    src={`${import.meta.env.VITE_API_URL}/api/img/${stack.technologyImage}`}
                    alt={stack.type}
                    className="h-12 w-12 object-contain"
                  />
                ))}
              </div>
            </div>
          )}

          {/* Database */}
          {databaseStacks?.length > 0 && (
            <div className="space-y-4 border-b md:border-b-0 w-full pb-5 lg:pb-0 lg:border-0 lg:border-e border-[#272727] lg:pe-20">
              <h2 className="text-xl text-[#98989A] mb-6">Database</h2>
              <div className="flex gap-8 items-center">
                {databaseStacks.map(stack => (
                  <img
                    key={stack.id}
                    src={`${import.meta.env.VITE_API_URL}/api/img/${stack.technologyImage}`}
                    alt={stack.type}
                    className="h-12 w-12 object-contain"
                  />
                ))}
              </div>
            </div>
          )}

          {/* Cache Memory */}
          {cacheMemoryStacks?.length > 0 && (
            <div className="space-y-4 border-b md:border-b-0 w-full  lg:border-0 lg:pe-20">
              <h2 className="text-xl text-[#98989A] mb-6">Cache Memory</h2>
              <div className="flex gap-8 items-center">
                {cacheMemoryStacks.map(stack => (
                  <img
                    key={stack.id}
                    src={`${import.meta.env.VITE_API_URL}/api/img/${stack.technologyImage}`}
                    alt={stack.type}
                    className="h-12 w-12 object-contain"
                  />
                ))}
              </div>
            </div>
          )}

          {/* Mobile Development */}
          {mobileStacks?.length > 0 && (
            <div className="space-y-4 lg:pe-20">
              <h2 className="text-xl text-[#98989A] mb-6">Mobile Development</h2>
              <div className="flex gap-8 items-center">
                {mobileStacks.map(stack => (
                  <img
                    key={stack.id}
                    src={`${import.meta.env.VITE_API_URL}/api/img/${stack.technologyImage}`}
                    alt={stack.type}
                    className="h-12 w-12 object-contain"
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>


        {/* security */}
        <div className='mb-20 text-center md:text-left lg:text-left'>
          <p>{portfolioDetail?.securityHeading}</p>
          <div className='text-[#98989A]' dangerouslySetInnerHTML={{ __html: portfolioDetail?.securityDescription }} />
        </div>
    </div>
  )
}

export default PortfolioDetails