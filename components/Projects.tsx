import React from 'react'
import FeaturedProjects from './featured-projects'
import Properties from './properties'
import { GetProjects } from '@/app/actions/appwrite'
import { Project } from '@/types'


export const Projects = async () => {
    const projects = await GetProjects()

    const projectList: Project[] = projects?.documents.map((doc) => ({
        $id: doc.$id,
        title: doc.title,
        description: doc.description,
        location: doc.location,
        area: doc.area,
        category: doc.category,
        completionDate: doc.completionDate,
        clientName: doc.clientName,
        designerName: doc.designerName,
        images: doc.images,
        beforeImage: doc.beforeImage,
        afterImage: doc.afterImage,
        $createdAt: doc.$createdAt,
        $updatedAt: doc.$updatedAt,
        $permissions: doc.$permissions,
        $databaseId: doc.$databaseId,
        $collectionId: doc.$collectionId,
    })) || [];

    const sortedProjects = projectList.sort((a, b) => new Date(b.$createdAt).getTime() - new Date(a.$createdAt).getTime());
    
    const recentProjects = sortedProjects.slice(0, 6);
    
    const featuredProjects = recentProjects.slice(0, 3);
    
    return (
        <div>
            <FeaturedProjects projects={featuredProjects} />
            <Properties projects={recentProjects} />
        </div>
    )
}

export default Projects