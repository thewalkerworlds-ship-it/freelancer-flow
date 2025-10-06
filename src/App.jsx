import React, { useState, useMemo, memo } from 'react';

// --- Icon Components (Your original, correct code) ---
const IndianRupee = (props) => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M6 3h12"/><path d="M6 8h12"/><path d="m19 13-1-1"/><path d="M6 13h12"/><path d="M18 18c-4-4-10-4-14 0"/></svg>);
const Plus = (props) => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M5 12h14"/><path d="M12 5v14"/></svg>);
const TrendingUp = (props) => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>);
const Download = (props) => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>);
const Edit = (props) => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/><path d="m15 5 4 4"/></svg>);
const Trash2 = (props) => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M3 6h18"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"/><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><line x1="10" x2="10" y1="11" y2="17"/><line x1="14" x2="14" y1="11" y2="17"/></svg>);
const Save = (props) => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/><polyline points="17 21 17 13 7 13 7 21"/><polyline points="7 3 7 8 15 8"/></svg>);
const X = (props) => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>);


// --- Main App Component ---
function App() {
    // --- Mock UI components from your original code, adapted for JSX ---
    const Card = ({ children, className = '' }) => (<div className={`bg-transparent p-1 ${className}`}><div className="bg-black/80 rounded-xl">{children}</div></div>);
    const CardHeader = ({ children, className = '' }) => <div className={`p-6 ${className}`}>{children}</div>;
    const CardTitle = ({ children, className = '' }) => <h3 className={`text-xl font-semibold tracking-tight ${className}`}>{children}</h3>;
    const CardDescription = ({ children, className = '' }) => <p className={`text-sm text-[var(--muted-foreground)] ${className}`}>{children}</p>;
    const CardContent = ({ children, className = '' }) => <div className={`p-6 pt-0 ${className}`}>{children}</div>;
    const Button = ({ children, className = '', variant = 'default', size = 'default', ...props }) => {
        const baseClasses = "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50";
        const variantClasses = { default: "bg-[var(--primary)] text-primary-foreground hover:bg-[var(--primary)]/90", outline: "border border-input bg-transparent hover:bg-accent hover:text-accent-foreground", };
        const sizeClasses = { default: "h-10 px-4 py-2", sm: "h-9 rounded-md px-3" };
        return (<button className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`} {...props}>{children}</button>);
    };
    const Input = ({ className = '', ...props }) => (<input className={`flex h-10 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm placeholder:text-[var(--muted-foreground)] focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 ${className}`} {...props} />);
    const Label = ({ children, className = '', ...props }) => <label className={`text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 ${className}`} {...props}>{children}</label>;
    const Table = ({ children, className = '' }) => <div className="relative w-full overflow-auto"><table className={`w-full caption-bottom text-sm ${className}`}>{children}</table></div>;
    const TableHeader = ({ children, className = '' }) => <thead className={`${className}`}>{children}</thead>;
    const TableBody = ({ children, className = '' }) => <tbody className={`${className}`}>{children}</tbody>;
    const TableRow = ({ children, className = '' }) => <tr className={`${className}`}>{children}</tr>;
    const TableHead = ({ children, className = '' }) => <th className={`h-12 px-4 text-left align-middle font-medium text-[var(--muted-foreground)] ${className}`}>{children}</th>;
    const TableCell = ({ children, className = '' }) => <td className={`p-4 align-middle ${className}`}>{children}</td>;
    
    // --- Your Original State and Logic (unchanged) ---
    const [projects, setProjects] = useState([
        { id: "1", name: "E-commerce Website", client: "Flipkart Vendor", amount: 85000, date: "2024-07-15" },
        { id: "2", name: "Mobile App Development", client: "Tech Startup Mumbai", amount: 150000, date: "2024-08-20" },
        { id: "3", name: "Brand Identity Design", client: "Delhi Fashion House", amount: 45000, date: "2024-09-10" },
    ]);

    const [formData, setFormData] = useState({ projectName: "", clientName: "", amount: "", date: "" });
    const [editingId, setEditingId] = useState(null);
    const [editFormData, setEditFormData] = useState(null);
    const [showConfirm, setShowConfirm] = useState(false);
    const [deleteId, setDeleteId] = useState(null);

    const totalEarnings = useMemo(() => projects.reduce((sum, project) => sum + project.amount, 0), [projects]);

    // --- Your original Excel export function (unchanged) ---
    const exportToExcel = (projects) => {
        const totalEarnings = projects.reduce((sum, p) => sum + (Number(p.amount) || 0), 0);
        const formattedData = projects.map((p, index) => ({
            s_no: index + 1,
            date: new Date(p.date).toLocaleDateString('en-IN', { day: '2-digit', month: '2-digit', year: 'numeric' }),
            projectName: p.name,
            client: p.client,
            amount: p.amount
        }));
        const htmlString = `
            <html xmlns:x="urn:schemas-microsoft-com:office:excel">
              <head>
                <meta charset="UTF-8">
                <style>
                  table, th, td { border: 1px solid black; border-collapse: collapse; }
                  .title { background-color: #0B5394; color: white; font-size: 16pt; font-weight: bold; text-align: center; height: 40px; vertical-align: middle; }
                  .header { background-color: #E6F2D4; font-weight: bold; text-decoration: underline; }
                  .total-label { background-color: #FFD966; font-weight: bold; }
                  .total-value { background-color: #FFD966; font-weight: bold; mso-number-format:"\\#\\,##0"; }
                </style>
              </head>
              <body>
                <table>
                  <tr><td class="title" colspan="5">Freelancer Dashboard</td></tr>
                  <tr></tr> 
                  <tr>
                    <td class="header">S.No.</td>
                    <td class="header">Date</td>
                    <td class="header">Project Name</td>
                    <td class="header">Client</td>
                    <td class="header">Amount</td>
                  </tr>
                  ${formattedData.map(p => `
                    <tr>
                      <td>${p.s_no}</td>
                      <td>${p.date}</td>
                      <td>${p.projectName}</td>
                      <td>${p.client}</td>
                      <td style="mso-number-format:'\\#\\,##0'">${p.amount}</td>
                    </tr>
                  `).join('')}
                  <tr></tr> 
                  <tr>
                    <td class="total-label" colspan="4">TOTAL EARNINGS</td>
                    <td class="total-value">${totalEarnings}</td>
                  </tr>
                </table>
              </body>
            </html>
        `;
        const blob = new Blob([htmlString], { type: 'application/vnd.ms-excel' });
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        const date = new Date().toISOString().split("T")[0];
        link.download = `freelancer-projects-${date}.xls`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    // --- Your original event handlers (unchanged) ---
    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.projectName && formData.clientName && formData.amount && formData.date) {
            const newProject = {
                id: Date.now().toString(),
                name: formData.projectName,
                client: formData.clientName,
                amount: parseFloat(formData.amount),
                date: formData.date,
            };
            setProjects(prevProjects => [...prevProjects, newProject].sort((a, b) => new Date(b.date) - new Date(a.date)));
            setFormData({ projectName: "", clientName: "", amount: "", date: "" });
        }
    };
    
    const handleEdit = (project) => { setEditingId(project.id); setEditFormData({ ...project }); };
    const handleSave = () => {
        if (editFormData) {
            setProjects(projects.map((p) => (p.id === editingId ? editFormData : p)).sort((a, b) => new Date(b.date) - new Date(a.date)));
            setEditingId(null);
            setEditFormData(null);
        }
    };
    const handleCancel = () => { setEditingId(null); setEditFormData(null); };
    const handleDelete = (id) => { setDeleteId(id); setShowConfirm(true); };
    const confirmDelete = () => { setProjects(projects.filter((p) => p.id !== deleteId)); setShowConfirm(false); setDeleteId(null); };
    const cancelDelete = () => { setShowConfirm(false); setDeleteId(null); };
    
    const sortedProjects = useMemo(() => [...projects].sort((a, b) => new Date(b.date) - new Date(a.date)), [projects]);

    // --- Reusable UI Components from your original code, adapted for JSX ---
    function CustomConfirmModal({ onConfirm, onCancel }) {
        return (
            <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex justify-center items-center z-50">
                <div className="rounded-xl p-1 neon-border w-full max-w-sm" style={{'--card-color': 'var(--destructive)'}}>
                    <div className="bg-black/90 rounded-lg">
                        <CardHeader>
                            <CardTitle className="text-[var(--destructive)] neon-text text-2xl">Confirm Deletion</CardTitle>
                            <CardDescription>Are you certain? This action cannot be undone.</CardDescription>
                        </CardHeader>
                        <CardContent className="flex justify-end gap-4">
                            <Button variant="outline" onClick={onCancel} className="border-[var(--secondary)]/50 text-[var(--secondary)] hover:bg-[var(--secondary)]/10 neon-border" style={{'--card-color': 'var(--secondary)'}}>Cancel</Button>
                            <Button onClick={onConfirm} className="bg-[var(--destructive)] text-white hover:bg-[var(--destructive)]/90 neon-glow" style={{'--glow-color': 'var(--destructive)'}}>Delete</Button>
                        </CardContent>
                    </div>
                </div>
            </div>
        );
    }

    const StatsCard = memo(({ totalEarnings }) => (
        <Card className="neon-border" style={{'--card-color': 'var(--primary)'}}>
            <CardHeader className="pb-3"><CardDescription>Total Earnings</CardDescription></CardHeader>
            <CardContent>
                <div className="flex items-center gap-4">
                    <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-[var(--primary)]/20 text-[var(--primary)]"><IndianRupee className="h-8 w-8" /></div>
                    <div className="space-y-1">
                        <p className="font-mono text-5xl font-bold text-[var(--primary)] neon-text">₹{totalEarnings.toLocaleString("en-IN")}</p>
                        <div className="flex items-center gap-2 text-sm text-[var(--accent)]"><TrendingUp className="h-4 w-4" /><span className="font-medium">+12.5% from last month</span></div>
                    </div>
                </div>
            </CardContent>
        </Card>
    ));

    const ProjectRow = memo(({ project, index, editingId, editFormData, setEditFormData, handleEdit, handleSave, handleCancel, handleDelete }) => {
        const isEditing = editingId === project.id;
        const displayDate = useMemo(() => new Date(project.date).toLocaleDateString('en-IN', { day: '2-digit', month: '2-digit', year: 'numeric' }), [project.date]);

        return (
            <TableRow className="border-b border-[var(--border)]/30">
                <TableCell className="text-[var(--muted-foreground)] font-medium border-r border-[var(--border)]/30 text-center">{index + 1}</TableCell>
                <TableCell className="font-semibold text-foreground border-r border-[var(--border)]/30">{isEditing ? <Input type="date" value={editFormData?.date || ""} onChange={(e) => setEditFormData({ ...editFormData, date: e.target.value })} className="h-9 neon-border" style={{'--card-color': 'var(--primary)'}}/> : displayDate}</TableCell>
                <TableCell className="font-semibold text-foreground border-r border-[var(--border)]/30">{isEditing ? <Input value={editFormData?.name || ""} onChange={(e) => setEditFormData({ ...editFormData, name: e.target.value })} className="h-9 neon-border" style={{'--card-color': 'var(--primary)'}}/> : project.name}</TableCell>
                <TableCell className="text-foreground border-r border-[var(--border)]/30">{isEditing ? <Input value={editFormData?.client || ""} onChange={(e) => setEditFormData({ ...editFormData, client: e.target.value })} className="h-9 neon-border" style={{'--card-color': 'var(--secondary)'}}/> : project.client}</TableCell>
                <TableCell className="text-right font-mono font-bold text-foreground border-r border-[var(--border)]/30 text-lg">{isEditing ? <Input type="number" value={editFormData?.amount || ""} onChange={(e) => setEditFormData({ ...editFormData, amount: parseFloat(e.target.value) || 0 })} className="h-9 text-right neon-border" step="0.01" style={{'--card-color': 'var(--accent)'}}/> : `₹${project.amount.toLocaleString("en-IN")}`}</TableCell>
                <TableCell className="text-center">
                    {isEditing ? (
                        <div className="flex items-center justify-center gap-2">
                            <Button size="sm" onClick={handleSave} className="h-9 px-3 bg-[var(--accent)]/20 text-[var(--accent)] hover:bg-[var(--accent)]/30 border border-[var(--accent)] neon-border" style={{'--card-color': 'var(--accent)'}}><Save className="h-4 w-4" /></Button>
                            <Button size="sm" variant="outline" onClick={handleCancel} className="h-9 px-3 border border-[var(--secondary)] text-[var(--secondary)] hover:bg-[var(--secondary)]/10 neon-border" style={{'--card-color': 'var(--secondary)'}}><X className="h-4 w-4" /></Button>
                        </div>
                    ) : (
                        <div className="flex items-center justify-center gap-2">
                            <Button size="sm" variant="outline" onClick={() => handleEdit(project)} className="h-9 px-3 border border-[var(--primary)] text-[var(--primary)] hover:bg-[var(--primary)]/10 neon-border" style={{'--card-color': 'var(--primary)'}}><Edit className="h-4 w-4" /></Button>
                            <Button size="sm" variant="outline" onClick={() => handleDelete(project.id)} className="h-9 px-3 border border-[var(--destructive)] text-[var(--destructive)] hover:bg-[var(--destructive)]/10 neon-border" style={{'--card-color': 'var(--destructive)'}}><Trash2 className="h-4 w-4" /></Button>
                        </div>
                    )}
                </TableCell>
            </TableRow>
        );
    });
    
    // --- Your Original JSX Layout (unchanged) ---
    return (
        <React.Fragment>
            {showConfirm && <CustomConfirmModal onConfirm={confirmDelete} onCancel={cancelDelete} />}
            <div className="min-h-screen p-4 sm:p-6 md:p-10">
                <div className="mx-auto max-w-7xl space-y-8">
                    <div className="space-y-2">
                        <h1 className="font-sans text-4xl font-bold tracking-tight md:text-5xl">
                            Freelancer <span className="text-[var(--primary)] neon-text">Dashboard</span>
                        </h1>
                        <p className="text-lg text-[var(--muted-foreground)]">Track your projects and earnings in INR</p>
                    </div>
                    <StatsCard totalEarnings={totalEarnings} />
                    <Card className="neon-border" style={{'--card-color': 'var(--accent)'}}>
                        <CardHeader>
                            <div className="flex flex-wrap items-center justify-between gap-4">
                                <div>
                                    <CardTitle className="text-2xl text-foreground">Projects</CardTitle>
                                    <CardDescription>Manage your active and completed projects</CardDescription>
                                </div>
                                <Button onClick={() => exportToExcel(projects)} variant="outline" className="border-[var(--accent)] text-[var(--accent)] hover:bg-[var(--accent)]/20 neon-border" style={{'--card-color': 'var(--accent)'}}>
                                    <Download className="mr-2 h-4 w-4" /> Export to Excel
                                </Button>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <div className="rounded-lg overflow-x-auto">
                                <Table>
                                    <TableHeader>
                                        <TableRow className="border-b-2 border-[var(--border)]">
                                            <TableHead className="w-16 text-center">S.No.</TableHead>
                                            <TableHead className="text-[var(--primary)] min-w-[120px]">Date</TableHead>
                                            <TableHead className="text-[var(--primary)] min-w-[200px]">Project Name</TableHead>
                                            <TableHead className="text-[var(--secondary)] min-w-[180px]">Client</TableHead>
                                            <TableHead className="text-[var(--accent)] min-w-[140px] text-right">Amount (₹)</TableHead>
                                            <TableHead className="text-center min-w-[120px]">Actions</TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        {sortedProjects.map((project, index) => (
                                            <ProjectRow key={project.id} project={project} index={index} editingId={editingId} editFormData={editFormData} setEditFormData={setEditFormData} handleEdit={handleEdit} handleSave={handleSave} handleCancel={handleCancel} handleDelete={handleDelete} />
                                        ))}
                                    </TableBody>
                                </Table>
                            </div>
                        </CardContent>
                    </Card>
                     <Card className="neon-border" style={{'--card-color': 'var(--accent)'}}>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-3 text-2xl text-foreground">
                                <span className="flex items-center justify-center h-8 w-8 rounded-md bg-[var(--accent)]/20 text-[var(--accent)] neon-border" style={{'--card-color':'var(--accent)'}}><Plus className="h-6 w-6"/></span>
                                Add New Project
                            </CardTitle>
                            <CardDescription>Enter project details to add to your dashboard</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 items-end">
                                    <div className="space-y-2"><Label htmlFor="date">Date</Label><Input id="date" type="date" value={formData.date} onChange={(e) => setFormData({ ...formData, date: e.target.value })} className="neon-border" style={{'--card-color': 'var(--primary)'}} required/></div>
                                    <div className="space-y-2"><Label htmlFor="projectName">Project Name</Label><Input id="projectName" placeholder="Enter project name" value={formData.projectName} onChange={(e) => setFormData({ ...formData, projectName: e.target.value })} className="neon-border" style={{'--card-color': 'var(--primary)'}} required/></div>
                                    <div className="space-y-2"><Label htmlFor="clientName">Client Name</Label><Input id="clientName" placeholder="Enter client name" value={formData.clientName} onChange={(e) => setFormData({ ...formData, clientName: e.target.value })} className="neon-border" style={{'--card-color': 'var(--secondary)'}} required/></div>
                                    <div className="space-y-2"><Label htmlFor="amount">Amount (₹)</Label><Input id="amount" type="number" placeholder="0.00" value={formData.amount} onChange={(e) => setFormData({ ...formData, amount: e.target.value })} className="neon-border" style={{'--card-color': 'var(--accent)'}} step="0.01" min="0" required/></div>
                                </div>
                                <Button type="submit" className="w-full bg-[var(--primary)] text-black hover:shadow-2xl font-semibold text-base h-12 transition-all duration-300 hover:scale-105 neon-glow" style={{'--glow-color': 'var(--primary)'}}>
                                    <Plus className="mr-2 h-5 w-5" /> Add Project
                                </Button>
                            </form>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </React.Fragment>
    )
}

export default App;

