# Ansible Playbook for Automation Tasks

This Ansible playbook automates the following tasks:
- Installs the chronyd service.
- Disables the app armor service.
- Sets the hostname as kariyer-{host IP}.
- Creates a user named kariyer with ID and GUID 3434.

## How to Run

1. Ensure you have Ansible installed on your control node.
2. Update the `hosts` file with the target hosts.
3. Run the playbook:
   ```bash
   ansible-playbook -i hosts main.yml
   ```

## Files

- `main.yml`: The main Ansible playbook file.
- `hosts`: The inventory file containing target hosts.
