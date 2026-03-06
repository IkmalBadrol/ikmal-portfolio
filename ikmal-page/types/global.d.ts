/* eslint-disable @typescript-eslint/no-explicit-any */
export { };

declare module '*.glb' {
    const content: string;
    export default content;
}

declare module '*.png' {
    const content: any;
    export default content;
}

declare module 'meshline' {
    export const MeshLineGeometry: any;
    export const MeshLineMaterial: any;
}

declare global {
    namespace JSX {
        interface IntrinsicElements {
            meshLineGeometry: any;
            meshLineMaterial: any;
        }
    }
}

// Support for React 19+ which moved JSX under React namespace
import React from 'react';
declare module 'react' {
    namespace JSX {
        interface IntrinsicElements {
            meshLineGeometry: any;
            meshLineMaterial: any;
        }
    }
}
