import { useState, useEffect } from "react";

const useMetadataTestingComponent = () => {
    const [timedMetadata, timedMetadata_set] = useState<Record<"value", number>>({value: 1});
    useEffect(()=>{
        setInterval(()=>timedMetadata_set(current=>{return {value: current.value+1}}),1000)
    },[])

    return {
        timedMetadata
    }
}

export default useMetadataTestingComponent;