/**
 * PrintGuys.ca Component Loader System
 * Dynamically loads HTML components and initializes their functionality
 */

class ComponentLoader {
  constructor() {
    this.loadedComponents = new Map();
    this.componentCache = new Map();
  }

  /**
   * Load a component into a placeholder
   * @param {string} placeholderId - ID of the placeholder element (without -placeholder suffix)
   * @param {string} componentPath - Path to the component HTML file
   * @param {Object} data - Data to inject into the component
   * @param {Object} options - Loading options
   */
  async loadComponent(placeholderId, componentPath, data = {}, options = {}) {
    const placeholder = document.getElementById(`${placeholderId}-placeholder`);
    
    if (!placeholder) {
      console.error(`Placeholder ${placeholderId}-placeholder not found`);
      return false;
    }

    try {
      // Show loading state if specified
      if (options.showLoading) {
        placeholder.innerHTML = '<div class="component-loading">Loading...</div>';
      }

      // Get component HTML (use cache if available)
      let html = this.componentCache.get(componentPath);
      if (!html) {
        const response = await fetch(componentPath);
        if (!response.ok) {
          throw new Error(`Failed to load component: ${response.status}`);
        }
        html = await response.text();
        this.componentCache.set(componentPath, html);
      }

      // Replace data placeholders with actual data
      html = this.processDataAttributes(html, data);

      // Insert component HTML
      placeholder.innerHTML = html;

      // Initialize component-specific functionality
      await this.initializeComponent(placeholderId, data, options);

      // Mark as loaded
      this.loadedComponents.set(placeholderId, {
        path: componentPath,
        data: data,
        loadedAt: new Date()
      });

      return true;
    } catch (error) {
      console.error(`Error loading component ${componentPath}:`, error);
      placeholder.innerHTML = `<div class="component-error">Failed to load component</div>`;
      return false;
    }
  }

  /**
   * Process data attributes in HTML template
   * @param {string} html - HTML template
   * @param {Object} data - Data object
   * @returns {string} Processed HTML
   */
  processDataAttributes(html, data) {
    Object.keys(data).forEach(key => {
      const regex = new RegExp(`data-${key}`, 'g');
      html = html.replace(regex, data[key]);
    });

    // Process conditional data attributes
    html = this.processConditionals(html, data);
    
    return html;
  }

  /**
   * Process conditional blocks in HTML
   * @param {string} html - HTML template
   * @param {Object} data - Data object
   * @returns {string} Processed HTML
   */
  processConditionals(html, data) {
    // Process {{#if condition}} blocks
    const ifRegex = /{{#if\s+(\w+)}}([\s\S]*?){{\/if}}/g;
    html = html.replace(ifRegex, (match, condition, content) => {
      return data[condition] ? content : '';
    });

    // Process {{#unless condition}} blocks
    const unlessRegex = /{{#unless\s+(\w+)}}([\s\S]*?){{\/unless}}/g;
    html = html.replace(unlessRegex, (match, condition, content) => {
      return !data[condition] ? content : '';
    });

    return html;
  }

  /**
   * Initialize component-specific JavaScript functionality
   * @param {string} componentId - Component identifier
   * @param {Object} data - Component data
   * @param {Object} options - Loading options
   */
  async initializeComponent(componentId, data = {}, options = {}) {
    switch (componentId) {
      case 'quote-calculator':
        this.initQuoteCalculator(data);
        break;
      case 'contact-form':
        this.initContactForm(data);
        break;
      case 'upload-form':
        this.initUploadForm(data);
        break;
      case 'image-gallery':
        this.initImageGallery(data);
        break;
      case 'tabs':
        this.initTabs(data);
        break;
      case 'accordion':
        this.initAccordion(data);
        break;
      case 'modal':
        this.initModal(data);
        break;
      default:
        // No specific initialization needed
        break;
    }

    // Fire custom event for component loaded
    document.dispatchEvent(new CustomEvent('componentLoaded', {
      detail: { componentId, data, options }
    }));
  }

  /**
   * Initialize Quote Calculator functionality
   */
  initQuoteCalculator(data) {
    const form = document.getElementById('quote-form');
    if (!form) return;

    const serviceSelect = form.querySelector('#service-type');
    const widthInput = form.querySelector('#width');
    const heightInput = form.querySelector('#height');
    const quantityInput = form.querySelector('#quantity');
    const priceDisplay = form.querySelector('#estimated-price');

    if (!serviceSelect || !widthInput || !heightInput || !quantityInput || !priceDisplay) return;

    const calculatePrice = () => {
      const service = serviceSelect.value;
      const width = parseFloat(widthInput.value) || 0;
      const height = parseFloat(heightInput.value) || 0;
      const quantity = parseInt(quantityInput.value) || 0;
      
      let price = 0;
      const selectedOption = serviceSelect.options[serviceSelect.selectedIndex];
      const basePrice = parseFloat(selectedOption.dataset.price) || 0;

      if (service === 'dtf') {
        // DTF: price per square inch
        const area = width * height;
        price = area * basePrice * quantity;
      } else {
        // Other services: price per piece
        price = basePrice * quantity;
      }

      priceDisplay.textContent = `$${price.toFixed(2)}`;
    };

    // Add event listeners
    [serviceSelect, widthInput, heightInput, quantityInput].forEach(element => {
      element.addEventListener('input', calculatePrice);
      element.addEventListener('change', calculatePrice);
    });

    // Initial calculation
    calculatePrice();
  }

  /**
   * Initialize Contact Form functionality
   */
  initContactForm(data) {
    const form = document.getElementById('contact-form');
    if (!form) return;

    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      
      const formData = new FormData(form);
      const data = Object.fromEntries(formData);

      // Basic validation
      if (!data.name || !data.email || !data.message) {
        this.showFormError('Please fill in all required fields');
        return;
      }

      if (!this.isValidEmail(data.email)) {
        this.showFormError('Please enter a valid email address');
        return;
      }

      try {
        // Show loading state
        const submitBtn = form.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;

        // Simulate form submission (replace with actual endpoint)
        await new Promise(resolve => setTimeout(resolve, 1000));

        // Show success message
        this.showFormSuccess('Message sent successfully! We\'ll get back to you soon.');
        form.reset();

        // Reset button
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
      } catch (error) {
        this.showFormError('Failed to send message. Please try again.');
        
        // Reset button
        const submitBtn = form.querySelector('button[type="submit"]');
        submitBtn.textContent = 'Send Message';
        submitBtn.disabled = false;
      }
    });
  }

  /**
   * Initialize Upload Form functionality
   */
  initUploadForm(data) {
    const uploadArea = document.querySelector('.upload-area');
    const fileInput = document.querySelector('#file-input');
    const fileList = document.querySelector('.uploaded-files');

    if (!uploadArea || !fileInput) return;

    // Drag and drop functionality
    uploadArea.addEventListener('dragover', (e) => {
      e.preventDefault();
      uploadArea.classList.add('dragover');
    });

    uploadArea.addEventListener('dragleave', () => {
      uploadArea.classList.remove('dragover');
    });

    uploadArea.addEventListener('drop', (e) => {
      e.preventDefault();
      uploadArea.classList.remove('dragover');
      
      const files = Array.from(e.dataTransfer.files);
      this.handleFileUpload(files, fileList);
    });

    uploadArea.addEventListener('click', () => {
      fileInput.click();
    });

    fileInput.addEventListener('change', (e) => {
      const files = Array.from(e.target.files);
      this.handleFileUpload(files, fileList);
    });
  }

  /**
   * Handle file upload processing
   */
  handleFileUpload(files, fileList) {
    const allowedTypes = ['image/png', 'image/jpeg', 'application/pdf', 'image/svg+xml'];
    const maxSize = 50 * 1024 * 1024; // 50MB

    files.forEach(file => {
      if (!allowedTypes.includes(file.type)) {
        this.showFormError(`File type ${file.type} not supported`);
        return;
      }

      if (file.size > maxSize) {
        this.showFormError(`File ${file.name} is too large (max 50MB)`);
        return;
      }

      // Add file to list
      const fileItem = document.createElement('div');
      fileItem.className = 'file-item';
      fileItem.innerHTML = `
        <span class="file-name">${file.name}</span>
        <span class="file-size">${this.formatFileSize(file.size)}</span>
        <button type="button" class="remove-file" onclick="this.parentElement.remove()">Remove</button>
      `;
      
      if (fileList) {
        fileList.appendChild(fileItem);
      }
    });
  }

  /**
   * Initialize Image Gallery functionality
   */
  initImageGallery(data) {
    const gallery = document.querySelector('.image-gallery');
    if (!gallery) return;

    const images = gallery.querySelectorAll('.gallery-image');
    const modal = document.getElementById('image-modal') || this.createImageModal();

    images.forEach((img, index) => {
      img.addEventListener('click', () => {
        this.openImageModal(img.src, img.alt, index, images);
      });
    });
  }

  /**
   * Initialize Tabs functionality
   */
  initTabs(data) {
    const tabContainers = document.querySelectorAll('.tabs-container');
    
    tabContainers.forEach(container => {
      const tabs = container.querySelectorAll('.tab-button');
      const panels = container.querySelectorAll('.tab-panel');

      tabs.forEach((tab, index) => {
        tab.addEventListener('click', () => {
          // Remove active class from all tabs and panels
          tabs.forEach(t => t.classList.remove('active'));
          panels.forEach(p => p.classList.remove('active'));

          // Add active class to clicked tab and corresponding panel
          tab.classList.add('active');
          if (panels[index]) {
            panels[index].classList.add('active');
          }
        });
      });
    });
  }

  /**
   * Initialize Accordion functionality
   */
  initAccordion(data) {
    const accordions = document.querySelectorAll('.accordion-item');
    
    accordions.forEach(item => {
      const trigger = item.querySelector('.accordion-trigger');
      const content = item.querySelector('.accordion-content');

      if (trigger && content) {
        trigger.addEventListener('click', () => {
          const isOpen = item.classList.contains('open');
          
          // Close all accordions if single-open mode
          if (data.singleOpen) {
            accordions.forEach(acc => acc.classList.remove('open'));
          }

          // Toggle current accordion
          if (!isOpen) {
            item.classList.add('open');
          } else {
            item.classList.remove('open');
          }
        });
      }
    });
  }

  /**
   * Utility methods
   */
  isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  formatFileSize(bytes) {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  }

  showFormError(message) {
    // Implementation for showing error messages
    console.error(message);
  }

  showFormSuccess(message) {
    // Implementation for showing success messages
    console.log(message);
  }
}

// Initialize global component loader
const componentLoader = new ComponentLoader();

// Global function for easy access
window.loadComponent = (placeholderId, componentPath, data, options) => {
  return componentLoader.loadComponent(placeholderId, componentPath, data, options);
};

// Export for module use
if (typeof module !== 'undefined' && module.exports) {
  module.exports = ComponentLoader;
}
