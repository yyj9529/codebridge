import { Button } from "~/common/components/ui/button";
import { useState } from "react";
import { getRoles, getTechStacks } from "~/features/onboarding/queries";
import type { Route } from "../../../../.react-router/types/app/features/auth/pages/+types/jobselection-page";
  


export const clientLoader = async({serverLoader}:Route.ClientLoaderArgs)=>{
  const {roles , techStacks} = await serverLoader();
  //const [roles , techStacks] = await Promise.all([getRoles(), getTechStacks()]);
  return { roles, techStacks };
}

//clientLoader가 실행되기 중일때 보여줄 화면
export function HydrateFallback(){
  return <div>Loading...</div>;
}

export const loader = async () => {
  //const roles = await getRoles();
  //const techStacks = await getTechStacks();
  
  const [roles , techStacks] = await Promise.all([getRoles(), getTechStacks()]);
  
  //const roles = getRoles();
  //const techStacks = getTechStacks();
  return { roles, techStacks };
};

export default function JobSelectionPage({loaderData} :Route.ComponentProps) {
  const [selectedMain, setSelectedMain] = useState<string | null>(null);
  const [selectedSub, setSelectedSub] = useState<string | null>(null);
  const { roles, techStacks } = loaderData;
  console.log("roles", roles);
  const handleMainSelect = (role: string) => {
    setSelectedMain(role);
    setSelectedSub(null); // Reset subcategory when main category changes
  };

  const handleSubSelect = (subRole: string) => {
    setSelectedSub(subRole);
  };

  const handleNextClick = () => {
    console.log("Main Category:", selectedMain);
    console.log("Sub Category:", selectedSub);
  };
  
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <div className="w-full max-w-2xl p-8">
        <h1 className="text-3xl font-bold mb-8 text-center">What is your primary role or interest?</h1>

        
          <div className="space-y-4">
            {
              roles.map((role:any)=>{
                return(
                  <div key={role.role_id}>
                    <Button className={`w-full text-left ${selectedMain === role.name ? 'bg-blue-500' : ''}`} onClick={() => handleMainSelect(role.name)}>{role.name}</Button>
                    <div className="flex flex-row">
                    {selectedMain === role.name && (
                      techStacks.filter((techStack :any)=>{
                        return techStack.role_id === role.role_id;
                      }).map((techStack :any)=>{
                        return(
                          <Button className={`w-1/5 h-10 text-left ml-1 ${selectedSub === techStack.techName ? 'bg-blue-500' : ''}`} onClick={() => handleSubSelect(techStack.techName)}>{techStack.techName}</Button>
                        )
                      })
                    )}
                    </div>
                  </div>
                )
              })
            }
          </div>
        
        <div className="flex justify-between mt-8">
          <Button variant="ghost">Back</Button>
          <Button onClick={handleNextClick}>Next</Button>
        </div>
      </div>
    </div>
  );
} 