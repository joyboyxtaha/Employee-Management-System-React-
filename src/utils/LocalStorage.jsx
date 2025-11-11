import React from 'react'

const LocalStorage = () => {
    const employees = [
    {
      "id": 1,
      "name": "Alice Khan",
      "email": "alice.khan@example.com",
      "password": "123",
      "tasks": [
        {
          "title": "Onboard new client",
          "description": "Gather client requirements and create initial project brief.",
          "status": "todo",
          "completed": false
        },
        {
          "title": "Set up dev environment",
          "description": "Install required tools and repo, verify build runs locally.",
          "status": "in-progress",
          "completed": false
        },
        {
          "title": "Create README",
          "description": "Write project README with setup and contribution guide.",
          "status": "review",
          "completed": false
        },
        {
          "title": "Write unit tests",
          "description": "Add unit tests for user service endpoints.",
          "status": "todo",
          "completed": false
        },
        {
          "title": "Deploy staging",
          "description": "Deploy current main branch to staging environment.",
          "status": "done",
          "completed": true
        }
      ]
    },
    {
      "id": 2,
      "name": "Bilal Ahmed",
      "email": "bilal.ahmed@example.com",
      "password": "123",
      "tasks": [
        {
          "title": "Design login page",
          "description": "Create responsive mockups and deliver final HTML/CSS.",
          "status": "in-progress",
          "completed": false
        },
        {
          "title": "Accessibility audit",
          "description": "Run accessibility checks and fix high priority issues.",
          "status": "todo",
          "completed": false
        },
        {
          "title": "Implement OAuth",
          "description": "Add Google and GitHub OAuth to authentication flow.",
          "status": "todo",
          "completed": false
        },
        {
          "title": "Refactor header component",
          "description": "Simplify header props and split into smaller components.",
          "status": "review",
          "completed": false
        },
        {
          "title": "Optimize images",
          "description": "Compress and convert images to webp for faster loads.",
          "status": "done",
          "completed": true
        }
      ]
    },
    {
      "id": 3,
      "name": "Sana Iqbal",
      "email": "sana.iqbal@example.com",
      "password": "123",
      "tasks": [
        {
          "title": "Database backup",
          "description": "Create nightly backup script and verify restore.",
          "status": "done",
          "completed": true
        },
        {
          "title": "Add indexes",
          "description": "Profile slow queries and add missing indexes.",
          "status": "in-progress",
          "completed": false
        },
        {
          "title": "Migrate users table",
          "description": "Add new columns and migrate existing user data safely.",
          "status": "todo",
          "completed": false
        },
        {
          "title": "Write migration tests",
          "description": "Ensure migrations are reversible and covered by tests.",
          "status": "todo",
          "completed": false
        },
        {
          "title": "Monitor DB metrics",
          "description": "Set up alerts for CPU, connections and slow queries.",
          "status": "review",
          "completed": false
        }
      ]
    },
    {
      "id": 4,
      "name": "Hamza Raza",
      "email": "hamza.raza@example.com",
      "password": "123",
      "tasks": [
        {
          "title": "Integrate payments",
          "description": "Add Stripe payments for one-time purchases.",
          "status": "in-progress",
          "completed": false
        },
        {
          "title": "Payment tests",
          "description": "Write end-to-end tests for checkout flow.",
          "status": "todo",
          "completed": false
        },
        {
          "title": "Fix coupon bug",
          "description": "Bug: coupon not applying discounts on repeat checkout.",
          "status": "todo",
          "completed": false
        },
        {
          "title": "Document API",
          "description": "Update API docs for payment endpoints.",
          "status": "review",
          "completed": false
        },
        {
          "title": "Reconcile transactions",
          "description": "Run nightly reconciliation between DB and Stripe.",
          "status": "done",
          "completed": true
        }
      ]
    },
    {
      "id": 5,
      "name": "Mariam Abbas",
      "email": "mariam.abbas@example.com",
      "password": "123",
      "tasks": [
        {
          "title": "Customer support triage",
          "description": "Review open tickets and assign priority.",
          "status": "in-progress",
          "completed": false
        },
        {
          "title": "Knowledge base update",
          "description": "Add articles for top 10 common issues.",
          "status": "todo",
          "completed": false
        },
        {
          "title": "On-call rotation",
          "description": "Prepare on-call schedule for next quarter.",
          "status": "done",
          "completed": true
        },
        {
          "title": "Create chat bot flow",
          "description": "Design initial chatbot script for FAQs.",
          "status": "todo",
          "completed": false
        },
        {
          "title": "Survey results",
          "description": "Analyze last month's CSAT and summarize insights.",
          "status": "review",
          "completed": false
        }
      ]
    }
  ]
const admin = [
    {
    "email": "admin@example.com",
    "password": "123",
    "role": "admin"
    }
  ]



     const setLocalStorage = () => {
        localStorage.setItem('employees', JSON.stringify(employees));
        localStorage.setItem('admin', JSON.stringify(admin));
      };
       const getLocalStorage = () => {
        const emplyees = JSON.parse(localStorage.getItem('empolyees'));
        const admin = JSON.parse(localStorage.getItem('admin'));
        
      };
      getLocalStorage();
  return (
    <div>
      
    </div>
  )
}

export default LocalStorage
