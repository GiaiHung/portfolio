export default {
    name: 'comment',
    type: 'document',
    title: 'Comment',
    fields: [
        {
            name: 'name',
            type: 'string'
        },
        {
            name: 'approved',
            type: 'boolean',
            title: 'Approved',
            description: 'Comment wont show on the site without approval',
        },
        {
            name: 'email',
            type: 'string'
        }, 
        {
            name: 'comment',
            type: 'text'
        },
        {
            name: 'image',
            type: 'string'
        },
        {
            name: 'post',
            type: 'reference',
            to: [{ type: 'post' }]
        }
    ]
}