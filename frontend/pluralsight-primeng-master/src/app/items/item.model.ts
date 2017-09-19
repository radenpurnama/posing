export class Item {
     private _tmb_id: string;
     private _tmb_kode:string;

	public get tmb_kode(): string {
		return this._tmb_kode;
	}

	public set tmb_kode(value: string) {
		this._tmb_kode = value;
	}

	public get tmb_nama(): string {
		return this._tmb_nama;
	}

	public set tmb_nama(value: string) {
		this._tmb_nama = value;
	}

	public get tmb_keterangan(): string {
		return this._tmb_keterangan;
	}

	public set tmb_keterangan(value: string) {
		this._tmb_keterangan = value;
	}

	public get tmb_nobarcode(): string {
		return this._tmb_nobarcode;
	}

	public set tmb_nobarcode(value: string) {
		this._tmb_nobarcode = value;
	}

	public get tmb_mfg_date(): string  {
		return this._tmb_mfg_date;
	}

	public set tmb_mfg_date(value: string ) {
		this._tmb_mfg_date = value;
	}
    
     private _tmb_nama: string;
     private _tmb_keterangan: string;
     private _tmb_nobarcode: string;  
     private _tmb_mfg_date: string ;
     private _tmb_exp_date: string ;
     private _tmb_no_lot: string ;
     private _tmb_image : string;
     private _tmb_warna : string;
     private _tmb_size : string;
     private _tmb_berat : string;
     private _tmb_status: string;
     private _segment1 : string;
     private _segment2 : string;
     private _segment3 : string;
     private _segment4 : string;
     private _segment5 : string;
     private _creation_date : string;
     private _created_by : string;
     private _last_updated_date : string;
     private _last_updated_by: string ;
     private _tmst_id : string;
     private _tmkat_id : string;
     private _tmb_harga_beli : string;
     private _tmb_stock : string;
     private _tmb_harga_jual: string;
     private _tmb_stock_min : string;
     private _tmb_qty1 : string;
     private _tmb_qty2 : string;
     private _tmb_harga_jual2 : string;
     private _tmb_qty3 : string;
     private _tmb_harga_jual3 : string;
     private _tmb_hitung_stock : string;
     private _tc_id : string;
     private _tmb_harga_grosir : string ;

	public get tmb_id(): string {
		return this._tmb_id;
	}

	public set tmb_id(value: string) {
		this._tmb_id = value;
	}
     private _tmb_harga_ecer: string    
    }