import { SafeResourceUrl } from "@angular/platform-browser";

export interface Work{
    idWork:string;
    projectType:string;
    title:string;
    shortDescription:string;
    longDescription:string;
    mainTechnology:string;
    allTechnology:string;
    github:string;
    video:string;
    namephotoWork:string;
    typephotoWork:string;
    filephotoWork: Uint8Array;
    safeVideoUrl?: SafeResourceUrl; 
}