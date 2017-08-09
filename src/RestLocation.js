import React, { Component } from "react";
import { withGoogleMap, GoogleMap, Marker } from "react-google-maps";

const SimpleMapExampleGoogleMap = withGoogleMap(props =>
    <GoogleMap
        defaultOptions={{
            scrollwheel: false
        }}
        defaultZoom={11}
        defaultCenter={{ lat: 25.9241563, lng: -80.1537153 }}
    >
        {props.markers.map(marker =>
            <Marker
                {...marker}
                onRightClick={() => props.onMarkerRightClick(marker)}
            />
        )}
    </GoogleMap>
);

/*
 * Add <script src="https://maps.googleapis.com/maps/api/js"></script> to your HTML to provide google.maps reference
 */
export default class RestLocation extends Component {
    render() {
        return (
            <div>
                <p>
                    16145 Biscayne Blvd
                    (just south of 163rd Street)
                    N. Miami Beach, FL 33160
                </p>
                <SimpleMapExampleGoogleMap
                    markers={[
                        {
                            position: {
                                lat: 25.9241563,
                                lng: -80.1537153
                            },
                            key: "Grilltime",
                            animation: 1
                        }
                    ]}
                    containerElement={<div style={{ height: "400" }} />}
                    mapElement={<div style={{ height: 400 }} />}
                />
            </div>
        );
    }
}
