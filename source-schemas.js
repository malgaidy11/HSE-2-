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

// SharePoint sources: configured now, READ ONLY.
// Browser-only portable mode cannot silently authenticate/download corporate SharePoint files.
// These URLs are retained so the source is one click away; import uses a downloaded local copy.
window.HSE_SHAREPOINT_SOURCES = {
  ptw: {
    label: "Issued Safe Work Permit 2026.xlsx",
    url: "https://petrolubegroup-my.sharepoint.com/:x:/r/personal/n_almoteb_petrolubegroup_com1/_layouts/15/doc2.aspx?sourcedoc=%7BD5F08ACF-9AD1-43E0-ABE8-35F037576F69%7D&file=Issued%20Safe%20Work%20Permit%202026.xlsx&fromShare=true&action=default&mobileredirect=true",
    mode: "sharepoint-readonly"
  },
  training: {
    label: "HSE Trainings log-sheet Record 2026.xlsx",
    url: "https://petrolubegroup-my.sharepoint.com/:x:/r/personal/ali_aljamaei_petrolubegroup_com/_layouts/15/doc2.aspx?sourcedoc=%7B7390608B-4C0F-4BF2-A71E-9910A5D2660D%7D&file=Copy%20of%20Copy%20of%20HSE%20Trainings%20log-sheet%20Record%20-2026%20new%202%201.xlsx&fromShare=true&action=default&mobileredirect=true",
    mode: "sharepoint-readonly"
  }
};

// Internal company files: fill only these two paths later at work.
// Example: "\\\\10.0.3.2\\ohs_sharefolder\\folder\\file.xlsx"
window.HSE_INTERNAL_SOURCES = {
  incidents: { path: "", schema: "incidents", readOnly: true },
  potentialIncidents: { path: "", schema: "potentialIncidents", readOnly: true }
};
