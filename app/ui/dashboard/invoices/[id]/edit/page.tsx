
import Form from '../../../invoices/edit-form';
import Breadcrumbs from '../../../invoices/breadcrumbs';
import { fetchInvoiceById, fetchCustomers } from '@/app/lib/data';


export default async function Page({ params }: { params: { id: string } }) {
    const id = params.id;
    const [invoice, customers] = await Promise.all([
        fetchInvoiceById(id),
        fetchCustomers(),
      ]);

  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Invoices', href: '/ui/dashboard/invoices' },
          {
            label: 'Edit Invoice',
            href: `/ui/dashboard/invoices/${id}/edit`,
            active: true,
          },
        ]}
      />
      <Form invoice={invoice} customers={customers} />
    </main>
  );
}

