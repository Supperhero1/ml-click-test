import React from "react";
import useMetadataTestingComponent from "./useMetadataTestingComponent";
import "./MetadataTestingComponent.css"

const MetadataTestingComponent = () => {
    const service = useMetadataTestingComponent()

    return <div className="testComponent" id="metadataTestingComponent" >
        <h2>Metadata test</h2>
        <div id="fixedMetadataComponent" className="testClickBox" data-test={JSON.stringify({test1: 123, test2: "123"})}>FIXED METADATA</div>
        <div className="testClickBox" data-timedMetadata={JSON.stringify(service.timedMetadata)}>TIMED METADATA TEST</div>
    </div>
}

export default MetadataTestingComponent;