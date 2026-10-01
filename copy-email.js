'use strict';

const emailAddress = document.querySelector('#contact-email');
const copyEmailButton = document.querySelector('#copy-email');
const copyEmailStatus = document.querySelector('#copy-email-status');

if (emailAddress && copyEmailButton && copyEmailStatus && typeof navigator.clipboard?.writeText === 'function') {
    copyEmailButton.addEventListener('click', async () => {
        copyEmailStatus.textContent = '';
        try {
            await navigator.clipboard.writeText(emailAddress.textContent.trim());
            copyEmailStatus.textContent = 'Copied';
        } catch {
            copyEmailStatus.textContent = 'Copy failed. Select and copy the address manually.';
        }
    });
    copyEmailButton.hidden = false;
}
