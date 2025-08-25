import { Button } from '../../../../components/ui/button'
import { RefreshCcw } from 'lucide-react';
import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import { useState } from 'react';
import axios from 'axios';
// import { toast } from 'sonner';

const MaterialCardItem = ({item,studyTypeContent,course,refreshData}) => {

  const [loading,setLoading]=useState(false);

  const GenerateContent = async ()=>{
    
    // // toast('Generating Your content .... ');
    setLoading(true)
    let chapters=''
    course?.courseLayout.chapters.forEach(chapter=>{
      chapters=(chapter.chapter_title||chapter?.chapterTitle)+','+chapters
    })
    console.log(chapters);
    
    
    const result = await axios.post('/api/study-type-content',{
      courseId:course?.courseId,
      type:item.name,
      chapters:chapters
    })

    setLoading(false);
    console.log(result);
    refreshData(); // Call refreshData to update the UI
    // // toast('Your content is ready to view');
    
  }

  const isContentReady = studyTypeContent?.[item.type]?.length != null;

  return (
    <div className={`border shadow-md rounded-lg p-5 flex flex-col items-center transition-all duration-300
        hover:shadow-lg hover:scale-105 cursor-pointer
    `}>
        {
        !isContentReady ?
          <h2 className='p-1 px-2 bg-gray-500 text-white rounded-full text-[10px] mb-2'>Generate</h2>
        : <h2 className='p-1 px-2 bg-green-500 text-white rounded-full text-[10px] mb-2'>Ready</h2>
        }

        <Image src={item.icon} alt={item.name} width={50} height={50}/>
        <h2 className='font-medium mt-3'>{item.name}</h2>
        <p className='text-gray-500 text-sm text-center'>{item.desc}</p>
        {
            !isContentReady ?
           <Button className='mt-3 w-full' variant='outline' onClick={(e)=>{
            e.preventDefault(); // Prevent Link navigation when clicking Generate
            GenerateContent();
           }}>
            {loading&&<RefreshCcw className='animate-spin'/>}
            Generate</Button>
           : 
           <Link href={'/course/'+course?.courseId+item.path}>
              <Button className='mt-3 w-full' variant='outline'>View</Button>
           </Link>
        }
    </div>
  )
}

export default MaterialCardItem
