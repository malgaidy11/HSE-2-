// HSE 2 source schemas captured from the user's actual files.
// IMPORTANT: column positions are intentional. Do not reorder without remapping.
// All source workbooks/files are READ ONLY.

window.HSE_SOURCE_SCHEMAS = {
  incidents: {
    kind: "xlsx",
    sheet: "incident investigation log",
    titleRow: 1,
    headerRow: 2,
    dataStartRow: 3,
    columns: [
      "Incident #","Incident Date ","Section","Location","Incident Type",
      "Incident Description  ","Person(s) envolved","Reasons Category",
      "Corrections","Loss detail","Severity","Status","Closing Date","# of Closeout days"
    ]
  },
  potentialIncidents: {
    kind: "csv",
    headerRow: 1,
    dataStartRow: 2,
    columns: [
      "Title","Recipient2(2)(email)","Requester Name","Requester Email",
      "Recipient1(email)","Recipient2(email)","CC1(email)","Requested Date",
      "Location","Area","Badge Number","Issue Description","Image links",
      "Suggested Corrective Action","Category","PI priority",
      "The PI was highlighted during (SSW)","Approve?","Final Request Status",
      "Target Date","Corrective action"
    ]
  }
};

window.HSE_COLUMN_MAP = {
  incidents: {
    id: "Incident #", date: "Incident Date ", department: "Section",
    location: "Location", type: "Incident Type", description: "Incident Description  ",
    persons: "Person(s) envolved", reason: "Reasons Category",
    correctiveAction: "Corrections", loss: "Loss detail", severity: "Severity",
    status: "Status", closingDate: "Closing Date", closeoutDays: "# of Closeout days"
  },
  potentialIncidents: {
    id: "Title", requester: "Requester Name", requesterEmail: "Requester Email",
    requestedDate: "Requested Date", location: "Location", area: "Area",
    badge: "Badge Number", description: "Issue Description", imageLinks: "Image links",
    suggestedCorrectiveAction: "Suggested Corrective Action", category: "Category",
    priority: "PI priority", ssw: "The PI was highlighted during (SSW)",
    approved: "Approve?", status: "Final Request Status", targetDate: "Target Date",
    correctiveAction: "Corrective action"
  }
};