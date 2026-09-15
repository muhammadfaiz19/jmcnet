"use client";

import { useState, useEffect, useMemo } from "react";
import { reportService } from "@/services/report.service";
import { Report, ReportStatus, REPORT_STATUS_LABELS, REPORT_STATUS_COLORS, REPORT_CATEGORY_LABELS, getMessageTemplates } from "@/types/report";
import { AlertDialog } from "@/components/ui/alert-dialog";
import {
  Warning,
  WarningCircle,
  MagnifyingGlass,
  CheckCircle,
  X,
  Trash,
  Image as ImageIcon,
  Clock,
  User,
  Tag,
  Note,
  Lightning
} from "@phosphor-icons/react";
import Image from "next/image";

export default function AdminReportsPage() {
  const [reports, setReports] = useState<Report[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [filterStatus, setFilterStatus] = useState<string>("");

  // Modal Detail & Update
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedReport, setSelectedReport] = useState<Report | null>(null);
  
  // Update Form State
  const [newStatus, setNewStatus] = useState<ReportStatus>("MENUNGGU");
  const [adminMessage, setAdminMessage] = useState("");
  const [adminPhoto, setAdminPhoto] = useState<File | null>(null);
  const [updateLoading, setUpdateLoading] = useState(false);

  // Delete State
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [idToDelete, setIdToDelete] = useState<number | null>(null);
  const [isDeleting, setIsDeleting] = useState(false);

  const fetchReports = async (status?: string) => {
    setLoading(true);
    try {
      const res = await reportService.getAll(status);
      if (res.data?.success) {
        setReports(res.data.data || []);
      }
    } catch (err: any) {
      setError("Gagal memuat daftar laporan.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchReports(filterStatus);
  }, [filterStatus]);

  const handleOpenDetail = (report: Report) => {
    setSelectedReport(report);
    setNewStatus(report.status);
    setAdminMessage("");
    setAdminPhoto(null);
    setModalOpen(true);
  };

  const handleUpdateStatus = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedReport) return;
    
    setUpdateLoading(true);
    setError("");

    const formData = new FormData();
    formData.append("status", newStatus);
    if (adminMessage) formData.append("message", adminMessage);
    if (adminPhoto) formData.append("photo", adminPhoto);

    try {
      const res = await reportService.updateStatus(selectedReport.id, formData);
      if (res.success && res.data) {
        setSuccess("Status laporan berhasil diperbarui.");
        setSelectedReport(res.data);
        fetchReports(filterStatus); // Refresh list
        setTimeout(() => setSuccess(""), 3000);
      } else {
        setError(res.message || "Gagal memperbarui status.");
      }
    } catch (err: any) {
      setError(err.response?.data?.message || "Gagal memperbarui status.");
    } finally {
      setUpdateLoading(false);
    }
  };

  const handleDeleteClick = (id: number) => {
    setIdToDelete(id);
    setDeleteDialogOpen(true);
  };

  const handleConfirmDelete = async () => {
    if (idToDelete === null) return;
    setIsDeleting(true);
    try {
      const res = await reportService.delete(idToDelete);
      if (res.success) {
        setSuccess("Laporan berhasil dihapus!");
        setTimeout(() => setSuccess(""), 3000);
        fetchReports(filterStatus);
      } else {
        setError(res.message || "Gagal menghapus laporan.");
      }
    } catch (err: any) {
      setError("Gagal menghapus laporan.");
    } finally {
      setIsDeleting(false);
      setDeleteDialogOpen(false);
      setIdToDelete(null);
    }
  };

  const formatDate = (dateString: string) => {
    return new Intl.DateTimeFormat("id-ID", {
      day: "2-digit", month: "short", year: "numeric"
    }).format(new Date(dateString));
  };

  const formatDateTime = (dateString: string) => {
    return new Intl.DateTimeFormat("id-ID", {
      day: "2-digit", month: "short", year: "numeric", hour: "2-digit", minute: "2-digit"
    }).format(new Date(dateString));
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-black text-slate-900">Kelola Laporan Kendala</h1>
          <p className="text-xs text-slate-500">
            Laporan gangguan dari pelanggan JMCNET.
          </p>
        </div>
      </div>

      {success && (
        <div className="p-4 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-2xl flex items-center gap-2 text-xs font-bold">
          <CheckCircle size={18} weight="fill" className="text-emerald-500" />
          <span>{success}</span>
        </div>
      )}

      {/* Tabs Filter */}
      <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
        <button
          onClick={() => setFilterStatus("")}
          className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all ${
            filterStatus === "" ? "bg-slate-900 text-white" : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
          }`}
        >
          Semua
        </button>
        {Object.entries(REPORT_STATUS_LABELS).map(([key, label]) => (
          <button
            key={key}
            onClick={() => setFilterStatus(key)}
            className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all ${
              filterStatus === key 
                ? `${REPORT_STATUS_COLORS[key as ReportStatus].bg} ${REPORT_STATUS_COLORS[key as ReportStatus].text}` 
                : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
        {loading ? (
          <div className="p-12 text-center text-slate-500 font-medium">
            <div className="w-8 h-8 border-4 border-sky-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <span>Memuat data laporan...</span>
          </div>
        ) : reports.length === 0 ? (
          <div className="p-12 text-center text-slate-400">
            <Warning size={48} className="mx-auto mb-4 text-slate-300" />
            <p className="text-sm font-semibold">Belum ada laporan ditemukan.</p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200 text-slate-600 text-[10px] font-extrabold uppercase tracking-wider">
                  <th className="px-6 py-4">No Laporan</th>
                  <th className="px-6 py-4">Nama Pelanggan</th>
                  <th className="px-6 py-4">Kategori</th>
                  <th className="px-6 py-4">Status</th>
                  <th className="px-6 py-4">Tanggal</th>
                  <th className="px-6 py-4 text-right">Aksi</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-sm font-medium text-slate-700">
                {reports.map((report) => (
                  <tr key={report.id} className="hover:bg-slate-50/50 transition-all">
                    <td className="px-6 py-4 font-bold text-sky-600">{report.reportNumber}</td>
                    <td className="px-6 py-4 font-bold text-slate-900">{report.customerName}</td>
                    <td className="px-6 py-4 text-xs text-slate-500">{REPORT_CATEGORY_LABELS[report.category]}</td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider ${REPORT_STATUS_COLORS[report.status].bg} ${REPORT_STATUS_COLORS[report.status].text}`}>
                        <span className={`w-1.5 h-1.5 rounded-full ${REPORT_STATUS_COLORS[report.status].dot}`}></span>
                        {REPORT_STATUS_LABELS[report.status]}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-xs text-slate-500">{formatDate(report.createdAt)}</td>
                    <td className="px-6 py-4 text-right">
                      <div className="inline-flex gap-2">
                        <button
                          onClick={() => handleOpenDetail(report)}
                          className="p-2 bg-slate-100 hover:bg-sky-500 hover:text-white rounded-xl transition-all cursor-pointer text-slate-600"
                          title="Detail"
                        >
                          <MagnifyingGlass size={14} weight="bold" />
                        </button>
                        <button
                          onClick={() => handleDeleteClick(report.id)}
                          className="p-2 bg-slate-100 hover:bg-red-500 hover:text-white rounded-xl transition-all cursor-pointer text-slate-600"
                          title="Hapus"
                        >
                          <Trash size={14} weight="bold" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {modalOpen && selectedReport && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm overflow-y-auto">
          <div className="bg-white w-full max-w-4xl rounded-[2rem] border border-slate-200 shadow-2xl overflow-hidden max-h-[90vh] flex flex-col animate-scale-up">
            <div className="p-6 border-b border-slate-150 flex items-center justify-between bg-slate-50">
              <div>
                <h3 className="text-lg font-black text-slate-900">
                  Detail Laporan #{selectedReport.reportNumber}
                </h3>
              </div>
              <button
                onClick={() => setModalOpen(false)}
                className="p-1.5 rounded-lg bg-slate-200 text-slate-600 hover:bg-slate-350 transition-all cursor-pointer"
              >
                <X size={18} weight="bold" />
              </button>
            </div>

            <div className="overflow-y-auto flex-grow p-6 flex flex-col md:flex-row gap-6">
              {/* Kolom Kiri: Info & Form */}
              <div className="w-full md:w-1/2 space-y-6">
                <div className="bg-slate-50 rounded-2xl p-5 border border-slate-100">
                  <h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4">Informasi Pelanggan</h4>
                  <div className="space-y-3 text-sm">
                    <p><span className="font-bold text-slate-700 w-24 inline-block">Nama:</span> {selectedReport.customerName}</p>
                    <p><span className="font-bold text-slate-700 w-24 inline-block">No HP:</span> {selectedReport.customerPhone}</p>
                    <p><span className="font-bold text-slate-700 w-24 inline-block">Alamat:</span> {selectedReport.customerAddress}</p>
                    {selectedReport.customerId && <p><span className="font-bold text-slate-700 w-24 inline-block">ID Cust:</span> {selectedReport.customerId}</p>}
                    <p><span className="font-bold text-slate-700 w-24 inline-block flex items-start mt-2">Kendala:</span> 
                       <span className="block mt-1">{selectedReport.description}</span>
                    </p>
                    {selectedReport.photoUrl && (
                      <div className="mt-2">
                        <span className="font-bold text-slate-700 text-xs flex items-center gap-1 mb-2"><ImageIcon size={14} /> Bukti Foto:</span>
                        <a href={selectedReport.photoUrl} target="_blank" rel="noreferrer" className="block relative w-32 h-20 rounded-lg overflow-hidden border border-slate-200">
                          <Image src={selectedReport.photoUrl} alt="Bukti" fill className="object-cover" unoptimized />
                        </a>
                      </div>
                    )}
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm">
                  <h4 className="text-sm font-black text-slate-900 mb-4">Update Status</h4>
                  <form onSubmit={handleUpdateStatus} className="space-y-4">
                    {error && (
                      <div className="p-3 bg-red-50 border border-red-200 text-red-700 rounded-xl text-xs font-bold">
                        {error}
                      </div>
                    )}
                    <div>
                      <label className="block text-[11px] font-bold text-slate-700 mb-1">Status Baru</label>
                      <select
                        value={newStatus}
                        onChange={(e) => setNewStatus(e.target.value as ReportStatus)}
                        className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:border-sky-500 focus:outline-none"
                      >
                        {Object.entries(REPORT_STATUS_LABELS).map(([k, v]) => (
                          <option key={k} value={k}>{v}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold text-slate-700 mb-1">Pesan (Opsional)</label>

                      {/* Template rekomendasi pesan */}
                      {(() => {
                        const templates = getMessageTemplates(newStatus, selectedReport.category);
                        if (templates.length === 0) return null;
                        return (
                          <div className="mb-2">
                            <p className="text-[10px] text-slate-400 font-semibold mb-1.5 flex items-center gap-1">
                              <Lightning size={11} weight="fill" className="text-amber-500" />
                              Pilih template pesan:
                            </p>
                            <div className="flex flex-wrap gap-1.5">
                              {templates.map((tpl, idx) => {
                                const isSelected = adminMessage === tpl.message;
                                return (
                                  <button
                                    key={idx}
                                    type="button"
                                    onClick={() => setAdminMessage(isSelected ? "" : tpl.message)}
                                    className={`px-2.5 py-1 rounded-lg text-[10px] font-bold transition-all border cursor-pointer ${
                                      isSelected
                                        ? "bg-sky-500 text-white border-sky-500 shadow-sm"
                                        : "bg-slate-50 text-slate-600 border-slate-200 hover:border-sky-300 hover:text-sky-700 hover:bg-sky-50"
                                    }`}
                                    title={tpl.message}
                                  >
                                    {tpl.label}
                                  </button>
                                );
                              })}
                            </div>
                          </div>
                        );
                      })()}

                      <textarea
                        rows={2}
                        value={adminMessage}
                        onChange={(e) => setAdminMessage(e.target.value)}
                        placeholder="Pesan untuk pelanggan..."
                        className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:border-sky-500 focus:outline-none resize-none"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold text-slate-700 mb-1">Foto Bukti (Opsional)</label>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => setAdminPhoto(e.target.files?.[0] || null)}
                        className="w-full text-xs file:mr-2 file:py-1 file:px-2 file:rounded-md file:border-0 file:bg-slate-100 file:text-slate-700"
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={updateLoading}
                      className="w-full py-2.5 bg-sky-500 hover:bg-sky-600 text-white text-sm font-bold rounded-xl transition-all shadow-sm disabled:opacity-70"
                    >
                      {updateLoading ? "Menyimpan..." : "Update Status"}
                    </button>
                  </form>
                </div>
              </div>

              {/* Kolom Kanan: Timeline */}
              <div className="w-full md:w-1/2">
                <h4 className="text-sm font-black text-slate-900 mb-4 flex items-center gap-2">
                  <Clock size={18} className="text-sky-500" />
                  Riwayat Timeline
                </h4>
                <div className="relative pl-6 space-y-6 before:absolute before:inset-y-0 before:left-[11px] before:w-0.5 before:bg-slate-200">
                  {selectedReport.statusLogs.map((log) => (
                    <div key={log.id} className="relative">
                      <div className={`absolute -left-[31px] w-4 h-4 rounded-full border-2 border-white ring-4 ring-white ${REPORT_STATUS_COLORS[log.status].bg} ${REPORT_STATUS_COLORS[log.status].text.replace('text', 'bg')}`}></div>
                      <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
                         <div className="flex justify-between items-start mb-1">
                            <span className={`text-[10px] px-1.5 py-0.5 rounded font-bold uppercase ${REPORT_STATUS_COLORS[log.status].bg} ${REPORT_STATUS_COLORS[log.status].text}`}>
                              {REPORT_STATUS_LABELS[log.status]}
                            </span>
                            <span className="text-[10px] text-slate-400">{formatDateTime(log.createdAt)}</span>
                         </div>
                         <p className="text-xs text-slate-700">{log.message || "-"}</p>
                         {log.photoUrl && (
                            <a href={log.photoUrl} target="_blank" rel="noreferrer" className="block relative w-20 h-14 rounded overflow-hidden border border-slate-200 mt-2">
                              <Image src={log.photoUrl} alt="Admin Bukti" fill className="object-cover" unoptimized />
                            </a>
                         )}
                         {log.createdBy && (
                           <p className="text-[9px] text-slate-400 mt-2">Oleh: {log.createdBy}</p>
                         )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <AlertDialog
        isOpen={deleteDialogOpen}
        onClose={() => {
          setDeleteDialogOpen(false);
          setIdToDelete(null);
        }}
        onConfirm={handleConfirmDelete}
        title="Hapus Laporan"
        description="Apakah Anda yakin ingin menghapus laporan ini? Tindakan ini tidak dapat dibatalkan."
        isLoading={isDeleting}
      />
    </div>
  );
}
