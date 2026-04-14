"use client";

import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";

export default function AdminDashboard() {
  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(true);

  // Login States
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [authError, setAuthError] = useState("");

  // Database States
  const [teamList, setTeamList] = useState([]);
  const [newName, setNewName] = useState("");
  const [newRole, setNewRole] = useState("");
  const [newLinkedin, setNewLinkedin] = useState("");
  const [newGithub, setNewGithub] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [uploadingImage, setUploadingImage] = useState(false);
  const [newBio, setNewBio] = useState("");
  const [newExpertise, setNewExpertise] = useState(""); 
  const [newStack, setNewStack] = useState(""); 
  const [newProjects, setNewProjects] = useState([{ title: "", description: "" }]);

  // UI States
  const [activeTab, setActiveTab] = useState("directory"); // directory, new, settings

  // Check for an active session on mount
  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setLoading(false);
      if (session) fetchTeam();
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
      setLoading(false);
      if (session) fetchTeam();
    });

    return () => subscription.unsubscribe();
  }, []);

  const fetchTeam = async () => {
    const { data, error } = await supabase.from('team_members').select('*');
    if (!error && data) setTeamList(data);
  };

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setImageFile(e.target.files[0]);
    }
  };

  const uploadImageToSupabase = async () => {
    if (!imageFile) return "/images/profiles/placeholder.jpeg";
    
    // Assumes user created a public bucket called 'profiles'
    const fileExt = imageFile.name.split('.').pop();
    const fileName = `${Date.now()}.${fileExt}`;

    const { error: uploadError } = await supabase.storage
      .from('profiles')
      .upload(fileName, imageFile);

    if (uploadError) {
      console.error("Storage upload error:", uploadError);
      return "/images/profiles/placeholder.jpeg";
    }

    const { data } = supabase.storage.from('profiles').getPublicUrl(fileName);
    return data.publicUrl;
  };

  const handleAddMember = async (e) => {
    e.preventDefault();
    if (!newName || !newRole) return;

    setUploadingImage(true);
    const uploadedImageUrl = await uploadImageToSupabase();
    
    const slug = newName.toLowerCase().replace(/\s+/g, '-');
    const expertiseArray = newExpertise.split(',').map(s => s.trim()).filter(Boolean);
    const stackArray = newStack.split(',').map(s => s.trim()).filter(Boolean);
    const filteredProjects = newProjects.filter(p => p.title.trim() !== "");

    const payload = { 
      name: newName, 
      role: newRole, 
      linkedin: newLinkedin, 
      github: newGithub,
      image: uploadedImageUrl,
      bio: newBio, 
      expertise: expertiseArray,
      stack: stackArray,
      projects: filteredProjects,
      slug 
    };

    const { error } = await supabase
      .from('team_members')
      .insert([payload]);

    setUploadingImage(false);

    if (!error) {
      setNewName(""); setNewRole(""); setNewLinkedin(""); setNewGithub(""); setImageFile(null);
      setNewBio(""); setNewExpertise(""); setNewStack(""); setNewProjects([{ title: "", description: "" }]);
      fetchTeam(); // Refresh the table
      setActiveTab("directory"); // go back to directory view
    } else {
      alert("Error adding member: " + error.message);
    }
  };

  const updateProject = (index, field, value) => {
    const updated = [...newProjects];
    updated[index][field] = value;
    setNewProjects(updated);
  };

  const addProjectField = () => {
    setNewProjects([...newProjects, { title: "", description: "" }]);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setAuthError("");

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setAuthError(error.message);
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[var(--color-bg)]">
        <div className="animate-spin h-8 w-8 text-[var(--color-accent)]">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
          </svg>
        </div>
      </div>
    );
  }

  // ==== NOT LOGGED IN UI (LOGIN SCREEN) ====
  if (!session) {
    return (
      <main className="min-h-screen flex items-center justify-center py-20 px-6 bg-[url('/noise.png')]">
        <div className="w-full max-w-md p-8 rounded-2xl bg-[var(--color-bg-card)] border border-[var(--color-border)] shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-[var(--color-accent)]" />
          
          <h1 className="text-3xl font-bold text-[var(--color-heading)] mb-2">Admin Panel</h1>
          <p className="text-[var(--color-text-muted)] mb-8">Sign in to manage team portfolios.</p>

          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-[var(--color-text-muted)] mb-2">Email Address</label>
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full bg-[var(--color-bg)] border border-[var(--color-border)] rounded-xl px-4 py-3 text-[var(--color-text)] focus:outline-none focus:border-[var(--color-accent)]"
                placeholder="admin@letscode.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[var(--color-text-muted)] mb-2">Password</label>
              <input 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full bg-[var(--color-bg)] border border-[var(--color-border)] rounded-xl px-4 py-3 text-[var(--color-text)] focus:outline-none focus:border-[var(--color-accent)]"
                placeholder="••••••••"
              />
            </div>
            
            {authError && <p className="text-red-400 text-sm">{authError}</p>}
            <button type="submit" className="w-full btn btn--primary py-3 rounded-xl disabled:opacity-50">
              Sign In
            </button>
          </form>
        </div>
      </main>
    );
  }

  // ==== SECURE DASHBOARD UI ====
  return (
    <div className="min-h-screen bg-[var(--color-bg)] flex flex-col md:flex-row">
      
      {/* SIDEBAR NAVIGATION */}
      <aside className="w-full md:w-64 bg-[var(--color-bg-card)] border-r border-[var(--color-border)] p-6 flex flex-col md:min-h-screen">
        <h2 className="text-2xl font-bold text-[var(--color-heading)] mb-8 tracking-tight">Letscode <span className="text-[var(--color-accent)]">Admin</span></h2>
        
        <nav className="flex-1 space-y-2 flex flex-row md:flex-col overflow-x-auto md:overflow-visible pb-4 md:pb-0 hide-scrollbar">
          <button onClick={() => setActiveTab('directory')} className={`text-left px-5 py-3 rounded-xl text-sm font-medium transition-all shrink-0 md:w-full ${activeTab === 'directory' ? 'bg-[var(--color-accent)] text-white shadow-md' : 'text-[var(--color-text-muted)] hover:text-[var(--color-heading)] hover:bg-[var(--color-bg-raised)]'}`}>
            Profiles Directory
          </button>
          <button onClick={() => setActiveTab('new')} className={`text-left px-5 py-3 rounded-xl text-sm font-medium transition-all shrink-0 md:w-full ${activeTab === 'new' ? 'bg-[var(--color-accent)] text-white shadow-md' : 'text-[var(--color-text-muted)] hover:text-[var(--color-heading)] hover:bg-[var(--color-bg-raised)]'}`}>
            Add Developer
          </button>
          <button onClick={() => setActiveTab('settings')} className={`text-left px-5 py-3 rounded-xl text-sm font-medium transition-all shrink-0 md:w-full ${activeTab === 'settings' ? 'bg-[var(--color-accent)] text-white shadow-md' : 'text-[var(--color-text-muted)] hover:text-[var(--color-heading)] hover:bg-[var(--color-bg-raised)]'}`}>
            Settings
          </button>
        </nav>

        <div className="mt-auto hidden md:block pt-8 border-t border-[var(--color-border)]">
          <p className="text-xs text-[var(--color-text-muted)] mb-4 truncate">{session.user.email}</p>
          <button onClick={handleLogout} className="w-full text-left px-4 py-2 text-red-500 hover:bg-red-500/10 rounded-lg text-sm font-medium transition-colors">
            Log Out
          </button>
        </div>
      </aside>

      {/* MAIN CONTENT AREA */}
      <main className="flex-1 p-6 md:p-12 overflow-y-auto max-h-screen">
        
        {/* TAB: DIRECTORY */}
        {activeTab === 'directory' && (
          <div className="max-w-5xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h1 className="text-3xl font-bold text-[var(--color-heading)] mb-8">Team Directory</h1>
            <div className="bg-[var(--color-bg-card)] border border-[var(--color-border)] rounded-2xl overflow-hidden shadow-sm">
              <table className="w-full text-left text-[var(--color-text)]">
                <thead className="bg-[#1a1b26] border-b border-[var(--color-border)]">
                  <tr>
                    <th className="px-6 py-5 font-semibold text-sm">Developer</th>
                    <th className="px-6 py-5 font-semibold text-sm">Role</th>
                    <th className="px-6 py-5 font-semibold text-sm text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[var(--color-border)]">
                  {teamList.length === 0 ? (
                    <tr>
                      <td colSpan="3" className="px-6 py-16 text-center">
                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[var(--color-accent-soft)] text-[var(--color-accent)] mb-4">
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 5v14M5 12h14"/></svg>
                        </div>
                        <h3 className="text-lg font-medium text-[var(--color-heading)] mb-2">No profiles found</h3>
                        <p className="text-[var(--color-text-muted)] max-w-sm mx-auto">Get started by navigating to the 'Add Developer' tab to create your first portfolio.</p>
                      </td>
                    </tr>
                  ) : (
                    teamList.map((member) => (
                      <tr key={member.id} className="hover:bg-[var(--color-bg-raised)] transition-colors">
                        <td className="px-6 py-5 font-medium flex items-center gap-4">
                          {member.image ? (
                            <img src={member.image} alt={member.name} className="w-10 h-10 rounded-full object-cover border border-[var(--color-border)]" />
                          ) : (
                            <div className="w-10 h-10 rounded-full bg-[var(--color-bg)] border border-[var(--color-border)] flex items-center justify-center text-[var(--color-text-muted)]">?</div>
                          )}
                          {member.name}
                        </td>
                        <td className="px-6 py-5 text-[var(--color-text-muted)]">{member.role}</td>
                        <td className="px-6 py-5 text-right">
                          <button onClick={() => alert('Editing functionality pending')} className="text-[var(--color-accent)] hover:underline text-sm font-medium mr-4">Edit</button>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* TAB: NEW DEVELOPER */}
        {activeTab === 'new' && (
          <div className="max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500 pb-20">
            <h1 className="text-3xl font-bold text-[var(--color-heading)] mb-2">Create Profile</h1>
            <p className="text-[var(--color-text-muted)] mb-8">Add a new developer to exactly match the Letscode portfolio system.</p>
            
            <form onSubmit={handleAddMember} className="space-y-8 bg-[var(--color-bg-card)] border border-[var(--color-border)] p-8 md:p-10 rounded-2xl shadow-sm">
              
              {/* IMAGE UPLOADER */}
              <div>
                <label className="block text-sm font-medium text-[var(--color-heading)] mb-3">Profile Photo</label>
                <div className="border-2 border-dashed border-[var(--color-border-hover)] bg-[var(--color-bg)] rounded-xl p-10 text-center hover:border-[var(--color-accent)] transition-colors cursor-pointer relative group">
                  <input type="file" accept="image/*" onChange={handleImageChange} className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10" />
                  <div className="flex flex-col items-center justify-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-[var(--color-accent-soft)] text-[var(--color-accent)] flex items-center justify-center group-hover:scale-110 transition-transform">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" y1="3" x2="12" y2="15"></line></svg>
                    </div>
                    {imageFile ? (
                      <span className="text-[var(--color-accent)] font-medium">Selected: {imageFile.name} (Click to change)</span>
                    ) : (
                      <span className="text-[var(--color-text-muted)] font-medium">Click to upload developer photo</span>
                    )}
                  </div>
                </div>
              </div>

              {/* CORE INFO */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-[var(--color-heading)] mb-2">Full Name</label>
                  <input type="text" value={newName} onChange={e => setNewName(e.target.value)} required className="w-full bg-[var(--color-bg)] border border-[var(--color-border)] rounded-xl px-4 py-3 text-[var(--color-text)] focus:border-[var(--color-accent)] outline-none transition-colors" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[var(--color-heading)] mb-2">Primary Role</label>
                  <input type="text" value={newRole} onChange={e => setNewRole(e.target.value)} required className="w-full bg-[var(--color-bg)] border border-[var(--color-border)] rounded-xl px-4 py-3 text-[var(--color-text)] focus:border-[var(--color-accent)] outline-none transition-colors" placeholder="Senior Backend Engineer" />
                </div>
              </div>

              {/* LINKS */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-[var(--color-heading)] mb-2">LinkedIn URL</label>
                  <input type="url" value={newLinkedin} onChange={e => setNewLinkedin(e.target.value)} className="w-full bg-[var(--color-bg)] border border-[var(--color-border)] rounded-xl px-4 py-3 text-[var(--color-text)] focus:border-[var(--color-accent)] outline-none transition-colors" placeholder="https://linkedin.com/..." />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[var(--color-heading)] mb-2">GitHub URL</label>
                  <input type="url" value={newGithub} onChange={e => setNewGithub(e.target.value)} className="w-full bg-[var(--color-bg)] border border-[var(--color-border)] rounded-xl px-4 py-3 text-[var(--color-text)] focus:border-[var(--color-accent)] outline-none transition-colors" placeholder="https://github.com/..." />
                </div>
              </div>

              {/* BIO */}
              <div>
                <label className="block text-sm font-medium text-[var(--color-heading)] mb-2">Biography</label>
                <textarea value={newBio} onChange={e => setNewBio(e.target.value)} required className="w-full bg-[var(--color-bg)] border border-[var(--color-border)] rounded-xl px-4 py-3 text-[var(--color-text)] focus:border-[var(--color-accent)] outline-none resize-none transition-colors" rows="4" placeholder="Craft a compelling professional story..."></textarea>
              </div>

              {/* SKILLS */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-[var(--color-heading)] mb-2">Core Expertise</label>
                  <input type="text" value={newExpertise} onChange={e => setNewExpertise(e.target.value)} className="w-full bg-[var(--color-bg)] border border-[var(--color-border)] rounded-xl px-4 py-3 text-[var(--color-text)] focus:border-[var(--color-accent)] outline-none transition-colors" placeholder="System Design, API Dev... (comma separated)" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[var(--color-heading)] mb-2">Tech Stack</label>
                  <input type="text" value={newStack} onChange={e => setNewStack(e.target.value)} className="w-full bg-[var(--color-bg)] border border-[var(--color-border)] rounded-xl px-4 py-3 text-[var(--color-text)] focus:border-[var(--color-accent)] outline-none transition-colors" placeholder="React, Node, Python... (comma separated)" />
                </div>
              </div>

              {/* PROJECTS */}
              <div>
                <div className="flex justify-between items-center mb-4">
                  <label className="block text-sm font-medium text-[var(--color-heading)]">Featured Projects</label>
                  <button type="button" onClick={addProjectField} className="text-sm text-[var(--color-accent)] hover:underline flex items-center gap-1 font-medium">
                     <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                     Add Another Project
                  </button>
                </div>
                
                <div className="space-y-4">
                  {newProjects.map((project, index) => (
                    <div key={index} className="bg-[var(--color-bg)] rounded-xl p-5 border border-[var(--color-border)] relative">
                      <div className="absolute top-0 left-0 w-1 h-full bg-[var(--color-accent)] rounded-l-xl"></div>
                      <input type="text" value={project.title} onChange={e => updateProject(index, 'title', e.target.value)} className="w-full bg-transparent border-b border-[var(--color-border)] pb-2 mb-3 text-[var(--color-heading)] focus:border-[var(--color-accent)] outline-none transition-colors font-semibold" placeholder="Project Title" />
                      <textarea value={project.description} onChange={e => updateProject(index, 'description', e.target.value)} className="w-full bg-transparent text-[var(--color-text)] outline-none resize-none placeholder-[var(--color-text-muted)]" rows="2" placeholder="Briefly describe what this project accomplished..."></textarea>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-[var(--color-border)]">
                <button type="submit" disabled={uploadingImage} className="w-full md:w-auto md:px-12 btn btn--primary py-4 text-base rounded-xl font-bold disabled:opacity-70 disabled:cursor-wait">
                  {uploadingImage ? "Uploading & Saving..." : "Publish Developer Profile"}
                </button>
              </div>
            </form>
          </div>
        )}

        {/* TAB: SETTINGS */}
        {activeTab === 'settings' && (
          <div className="max-w-2xl mx-auto animate-in fade-in py-10">
            <h1 className="text-3xl font-bold text-[var(--color-heading)] mb-8">Admin Settings</h1>
            <div className="bg-[var(--color-bg-card)] border border-[var(--color-border)] rounded-2xl p-8">
              <p className="text-[var(--color-text)] mb-6">Database configuration and advanced administration controls will appear here.</p>
              <div className="flex flex-col gap-4">
                <div className="flex justify-between items-center p-4 rounded-xl bg-[var(--color-bg)] border border-[var(--color-border)]">
                  <div>
                    <h4 className="font-semibold text-[var(--color-heading)]">Storage Bucket</h4>
                    <span className="text-sm text-[var(--color-text-muted)]">Connected to 'profiles' bucket</span>
                  </div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
              </div>
            </div>
          </div>
        )}

      </main>
    </div>
  );
}
