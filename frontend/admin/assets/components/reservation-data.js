class ReservationData extends HTMLElement {
  connectedCallback() {
    const guest = this.getAttribute('guest') || 'Guest Name';
    const room = this.getAttribute('room') || 'Room';
    const checkin = this.getAttribute('checkin') || 'Check-in not set';
    const checkout = this.getAttribute('checkout') || 'Check-out not set';
    const added = this.getAttribute('added') || 'Not specified';
    const status = this.getAttribute('status') || 'Pending';

    this.innerHTML = `
      <div class="bg-white p-5 shadow-md rounded-md">
        <h3 class="font-semibold text-lg">${guest}</h3>
        <p class="text-sm text-gray-600 mt-1">Room: ${room}</p>
        <p class="text-sm text-gray-600">Check-in: ${checkin}</p>
        <p class="text-sm text-gray-600">Check-out: ${checkout}</p>
        <p class="text-sm text-gray-600">Added: ${added}</p>
        <p class="text-sm text-gray-500 mt-2">Status: <span class="font-medium">${status}</span></p>

        <div class="mt-4 flex justify-end gap-2">
          <button class="confirm-btn bg-[#7C6A46] hover:bg-green-600 text-white text-sm px-3 py-1 rounded">Confirm</button>
          <button class="reject-btn bg-white border-[#7C6A46] text-[#7C6A46] text-sm px-3 py-1 rounded">Reject</button>
        </div>
      </div>
    `;

    this.querySelector('.confirm-btn')?.addEventListener('click', () => {
      this.setAttribute('status', 'Confirmed');
      this.updateStatus();
    });

    this.querySelector('.reject-btn')?.addEventListener('click', () => {
      this.setAttribute('status', 'Rejected');
      this.updateStatus();
    });
  }

  updateStatus() {
    const statusEl = this.querySelector('span.font-medium');
    if (statusEl) {
      statusEl.textContent = this.getAttribute('status');
    }
  }
}

customElements.define('reservation-data', ReservationData);
