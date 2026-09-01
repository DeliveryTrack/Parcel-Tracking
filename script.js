function trackParcel(){
  const input=document.getElementById("mobile");
  const mobile=input.value.replace(/\D/g,"");
  const message=document.getElementById("message");
  const result=document.getElementById("result");
  result.classList.add("hidden");
  message.textContent="";

  if(mobile.length!==10){
    message.textContent="Please enter a valid 10 digit mobile number.";
    return;
  }

  const parcel=parcels.find(p=>p.mobile===mobile);
  if(!parcel){
    message.textContent="No parcel found for this mobile number.";
    return;
  }

  result.innerHTML=`
    <button class="close-result" onclick="closeResult()" aria-label="Close">×</button>
    <h2 style="margin-top:0">📦 Parcel Details</h2>
    <div class="row"><span class="key">Customer</span><span class="value">${parcel.name}</span></div>
    <div class="row"><span class="key">Parcel ID</span><span class="value">${parcel.parcelId}</span></div>
    <div class="row"><span class="key">Project</span><span class="value">${parcel.project}</span></div>
    <div class="row"><span class="key">Courier</span><span class="value">${parcel.courier}</span></div>
    <div class="row"><span class="key">Dispatch Location</span><span class="value">${parcel.dispatchLocation}</span></div>
    <div class="row"><span class="key">Route</span><span class="value">${parcel.route}</span></div>
    <div class="row"><span class="key">Payment</span><span class="value"><span class="status">Prepaid</span></span></div>
    <div class="row"><span class="key">Status</span><span class="value"><span class="status pending-status">Pending</span></span></div>
    <div class="row"><span class="key">Expected Delivery</span><span class="value">${parcel.expected}</span></div>
    <div class="row"><span class="key">Last Updated</span><span class="value">${parcel.updated}</span></div>

    <h3>Tracking History</h3>
    <div class="timeline">
      <div class="step active-step">
        <strong>Order Confirmed</strong>
        <div class="small">01 September 2026</div>
      </div>
      <div class="step active-step">
        <strong>Parcel Prepared</strong>
        <div class="small">01 September 2026</div>
      </div>
      <div class="step pending-step">
        <strong>Dispatched</strong>
        <div class="small">${parcel.dispatchLocation}</div>
      </div>
      <div class="step pending-step">
        <strong>In Transit</strong>
        <div class="small">${parcel.route}</div>
      </div>
    </div>`;
  result.classList.remove("hidden");
}

function closeResult(){
  document.getElementById("result").classList.add("hidden");
}
