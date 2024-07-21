export interface VisitorProfile{
    authority: 'VISITOR',
    userCredentailId: string,
    visitorId: string,
    visitorPhoneNumber: string | null,
    pid: string | null,
    visitorName: string | null,
    clientName: string | null,
    visitorEmail: string | null,
    visitorPhoto: string | null,
    isApproved: boolean | null
}

export interface ClientProfile{
    authority: 'CLIENT',
}


export type UserProfile = VisitorProfile | ClientProfile