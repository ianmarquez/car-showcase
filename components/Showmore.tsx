"use client";
import { ShowmoreProps } from "@/types";
import { useRouter } from "next/navigation";
import CustomButton from "./CustomButton";
import { updateSearchParams } from "@/utils";

const Showmore: React.FC<ShowmoreProps> = ({ isNext, pageNumber }) => {
  const router = useRouter();

  const handleNavigation = () => {
    const newLimit = (pageNumber + 1) * 10;
    const newPathname = updateSearchParams("limit", newLimit.toString());
    router.push(newPathname);
  };

  return (
    <>
      <div className="w-full flex-center gap-5 mt-10">
        {!isNext && (
          <CustomButton
            title="Show More"
            btnType="button"
            containerStyles="bg-primary-blue rounded-full text-white"
            handleClick={handleNavigation}
          />
        )}
      </div>
    </>
  );
};

export default Showmore;
