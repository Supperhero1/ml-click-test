import React from "react";
import useMetadataTestingComponent from "./useMetadataTestingComponent";
import "./MetadataTestingComponent.css"

const onClick = ()=>{
    (window as any).dataLayer = (window as any).dataLayer || [];
    (window as any).dataLayer.push({'event': 'clickOnAd', "customValue": JSON.stringify({a: 123, b: {c: 222, d: "ASD"}})});
}

const MetadataTestingComponent = () => {
    const service = useMetadataTestingComponent()

    return <div className="testComponent" id="metadataTestingComponent" >
        <h2>Metadata test</h2>
        <div id="fixedMetadataComponent" className="testClickBox" onClick={onClick}>FIXED METADATA</div>
        <div className="testClickBox" data-timedMetadata={JSON.stringify(service.timedMetadata)}>TIMED METADATA TEST</div>
    </div>
}

export default MetadataTestingComponent;